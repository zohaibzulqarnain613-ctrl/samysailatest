import { cn } from '@/lib/utils';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

type DottedSurfaceProps = Omit<React.ComponentProps<'div'>, 'ref'>;

export function DottedSurface({ className, ...props }: DottedSurfaceProps) {
	const containerRef = useRef<HTMLDivElement>(null);
	const sceneRef = useRef<{
		scene: THREE.Scene;
		camera: THREE.PerspectiveCamera;
		renderer: THREE.WebGLRenderer;
		particles: THREE.Points[];
		animationId: number;
		count: number;
	} | null>(null);

	useEffect(() => {
		const container = containerRef.current;
		if (!container) return;

		const SEPARATION = 150;
		const isMobile = window.matchMedia('(max-width: 767px)').matches;
		const AMOUNTX = isMobile ? 18 : 26;
		const AMOUNTY = isMobile ? 24 : 34;

		const getSize = () => ({
			width: container.clientWidth || window.innerWidth,
			height: container.clientHeight || window.innerHeight,
		});
		const initial = getSize();

		// Scene setup
		const scene = new THREE.Scene();
		scene.fog = new THREE.Fog(0x000000, 6000, 20000);

		const camera = new THREE.PerspectiveCamera(
			60,
			initial.width / initial.height,
			1,
			10000,
		);
		camera.position.set(0, 355, 1220);
		camera.lookAt(0, 0, 0);


		const renderer = new THREE.WebGLRenderer({
			alpha: true,
			antialias: false,
			powerPreference: 'low-power',
		});
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1 : 1.5));
		renderer.setSize(initial.width, initial.height);
		renderer.setClearColor(0x000000, 0);
		renderer.domElement.style.width = '100%';
		renderer.domElement.style.height = '100%';

		container.appendChild(renderer.domElement);


		// Create particles
		const particles: THREE.Points[] = [];
		const positions: number[] = [];
		const colors: number[] = [];

		// Create geometry for all particles
		const geometry = new THREE.BufferGeometry();

		for (let ix = 0; ix < AMOUNTX; ix++) {
			for (let iy = 0; iy < AMOUNTY; iy++) {
				const x = ix * SEPARATION - (AMOUNTX * SEPARATION) / 2;
				const y = 0;
				const z = iy * SEPARATION - (AMOUNTY * SEPARATION) / 2;

				positions.push(x, y, z);
				colors.push(96 / 255, 165 / 255, 250 / 255);
			}
		}

		geometry.setAttribute(
			'position',
			new THREE.Float32BufferAttribute(positions, 3),
		);
		geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

		// Create material
		const material = new THREE.PointsMaterial({
			size: 14,
			vertexColors: true,
			transparent: true,
			opacity: 0.85,
			sizeAttenuation: true,
		});


		// Create points object
		const points = new THREE.Points(geometry, material);
		scene.add(points);

		let count = 0;
		const rafRef = { id: 0 };
		let lastFrame = 0;
		const FRAME_INTERVAL = 1000 / 30; // cap at 30fps: lighter CPU/GPU, visually identical

		// Animation function
		const animate = (now: number) => {
			rafRef.id = requestAnimationFrame(animate);

			if (now - lastFrame < FRAME_INTERVAL) return;
			lastFrame = now;

			const positionAttribute = geometry.attributes.position;
			const positions = positionAttribute.array as Float32Array;

			let i = 0;
			for (let ix = 0; ix < AMOUNTX; ix++) {
				for (let iy = 0; iy < AMOUNTY; iy++) {
					const index = i * 3;

					positions[index + 1] =
						Math.sin((ix + count) * 0.3) * 50 +
						Math.sin((iy + count) * 0.5) * 50;

					i++;
				}
			}

			positionAttribute.needsUpdate = true;

			renderer.render(scene, camera);
			count += 0.2;
		};

		const start = () => {
			if (rafRef.id) return;
			lastFrame = 0;
			rafRef.id = requestAnimationFrame(animate);
		};
		const stop = () => {
			if (rafRef.id) cancelAnimationFrame(rafRef.id);
			rafRef.id = 0;
		};

		// Pause animation when tab is not visible
		const handleVisibility = () => {
			if (document.hidden) stop();
			else start();
		};
		document.addEventListener('visibilitychange', handleVisibility);

		// Handle resize of the container
		const handleResize = () => {
			const { width, height } = getSize();
			camera.aspect = width / height;
			camera.updateProjectionMatrix();
			renderer.setSize(width, height);
		};

		window.addEventListener('resize', handleResize);
		const ro = new ResizeObserver(handleResize);
		ro.observe(container);


		// Start animation
		start();

		// Store references
		sceneRef.current = {
			scene,
			camera,
			renderer,
			particles: [points],
			animationId: 0,
			count,
		};

		// Cleanup function
		return () => {
			window.removeEventListener('resize', handleResize);
			ro.disconnect();
			document.removeEventListener('visibilitychange', handleVisibility);


			stop();

			if (sceneRef.current) {

				sceneRef.current.scene.traverse((object) => {
					if (object instanceof THREE.Points) {
						object.geometry.dispose();
						if (Array.isArray(object.material)) {
							object.material.forEach((material) => material.dispose());
						} else {
							object.material.dispose();
						}
					}
				});

				sceneRef.current.renderer.dispose();

				if (containerRef.current && sceneRef.current.renderer.domElement) {
					containerRef.current.removeChild(
						sceneRef.current.renderer.domElement,
					);
				}
			}
		};
	}, []);

	return (
		<div
			ref={containerRef}
			className={cn('pointer-events-none absolute inset-0', className)}
			{...props}
		/>
	);
}
