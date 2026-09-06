'use client';

import { cn } from '@/lib/utils';
import { ArrowRight, Code2, Copy, Rocket, Zap } from 'lucide-react';
import { useState } from 'react';

export interface CardFlipProps {
  title?: string;
  subtitle?: string;
  description?: string;
  features?: string[];
  color?: string;
  onLearnMore?: () => void;
  imageUrl?: string;
}

export default function CardFlip({
  title = 'Build MVPs Fast',
  subtitle = 'Launch your idea in record time',
  description = 'Copy, paste, customize—and launch your MVP faster than ever with our developer-first component library.',
  features = [
    'Copy & Paste Ready',
    'Developer-First',
    'MVP Optimized',
    'Zero Setup Required',
  ],
  color = '#ff2e88',
  onLearnMore,
  imageUrl
}: CardFlipProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      style={{
        ['--primary' as any]: color ?? '#2563eb',
      }}
      className="group relative h-[360px] w-full max-w-[280px] sm:max-w-[300px] [perspective:2000px]"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={cn(
          'relative h-full w-full',
          '[transform-style:preserve-3d]',
          'transition-transform duration-700 ease-out',
          isFlipped
            ? '[transform:rotateY(180deg)]'
            : '[transform:rotateY(0deg)]',
        )}
      >
        {/* Front of card */}
        <div
          className={cn(
            'absolute inset-0 h-full w-full',
            '[transform:rotateY(0deg)] [backface-visibility:hidden]',
            'overflow-hidden rounded-2xl',
            'bg-white/5 backdrop-blur-xl',
            'border border-white/10',
            'shadow-[0_0_30px_rgba(56,189,248,0.15)]',
            'transition-all duration-300',
            'will-change-transform',
            'group-hover:border-blue-400/50 group-hover:shadow-[0_0_40px_rgba(99,102,241,0.3)]',
          )}
        >
          {/* Background gradient effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-cyan-500/20 opacity-50 group-hover:opacity-80 transition-opacity duration-500" />

          {/* Profile Image */}
          {imageUrl ? (
            <div className="absolute inset-0 flex items-center justify-center pt-8">
              <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl group-hover:scale-110 group-hover:border-white/40 transition-all duration-500">
                <img
                  src={imageUrl}
                  alt={title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center"
                  width="128"
                  height="128"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

            </div>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center pt-8">
              <div className="relative w-32 h-32 bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 rounded-full flex items-center justify-center shadow-2xl group-hover:shadow-blue-500/60 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full opacity-0 group-hover:opacity-70 transition-opacity duration-500 blur-lg animate-pulse" />
                <div className="text-white text-5xl font-bold relative z-10 group-hover:scale-110 transition-transform duration-500">
                  {title?.charAt(0)}
                </div>
              </div>
            </div>
          )}

          {/* Bottom content */}
          <div className="absolute right-0 bottom-0 left-0 p-5 bg-gradient-to-t from-black/60 via-black/40 to-transparent">
            <div className="flex items-center justify-between gap-3">
              <div className="space-y-1.5">
                <h3 className="text-lg leading-snug font-semibold tracking-tight text-white transition-all duration-300 ease-out group-hover:translate-y-[-4px]">
                  {title}
                </h3>
                <p className="line-clamp-2 text-sm tracking-tight text-blue-300 transition-all duration-300 ease-out group-hover:translate-y-[-4px]">
                  {subtitle}
                </p>
              </div>
              <div className="group/icon relative">
                <div
                  className={cn(
                    'absolute inset-[-8px] rounded-lg transition-opacity duration-300',
                    'from-primary/20 via-primary/10 bg-gradient-to-br to-transparent',
                    'opacity-0 group-hover/icon:opacity-100',
                  )}
                />
                <Zap className="text-primary relative z-10 h-5 w-5 transition-all duration-300 group-hover/icon:scale-110 group-hover/icon:rotate-12" />
              </div>
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div
          className={cn(
            'absolute inset-0 h-full w-full',
            '[transform:rotateY(180deg)] [backface-visibility:hidden]',
            'rounded-2xl p-5',
            'bg-white/5 backdrop-blur-xl',
            'border border-white/10',
            'shadow-[0_0_30px_rgba(56,189,248,0.15)]',
            'flex flex-col',
            'transition-all duration-300',
            'will-change-transform',
            'group-hover:border-blue-400/50 group-hover:shadow-[0_0_40px_rgba(99,102,241,0.3)]',
          )}
        >
          {/* Background gradient */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-cyan-500/20 opacity-50 group-hover:opacity-80 transition-opacity duration-500" />

          <div className="relative z-10 flex-1 space-y-5">
            <div className="space-y-2">
              <div className="mb-2 flex items-center gap-2">
                <div className="from-primary via-primary/90 to-primary/80 flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br">
                  <Code2 className="h-4 w-4 text-white" />
                </div>
                <h3 className="text-lg leading-snug font-semibold tracking-tight text-white transition-all duration-300 ease-out group-hover:translate-y-[-2px]">
                  {title}
                </h3>
              </div>
              <p className="line-clamp-2 text-sm tracking-tight text-gray-300 transition-all duration-300 ease-out group-hover:translate-y-[-2px]">
                {description}
              </p>
            </div>

            <div className="space-y-2.5">
              {features.map((feature, index) => {
                const icons = [Copy, Code2, Rocket, Zap];
                const IconComponent = icons[index % icons.length];

                return (
                  <div
                    key={feature}
                    className="flex items-center gap-3 text-sm text-gray-300 transition-all duration-300"
                    style={{
                      transform: isFlipped
                        ? 'translateX(0)'
                        : 'translateX(-10px)',
                      opacity: isFlipped ? 1 : 0,
                      transitionDelay: `${index * 80 + 150}ms`,
                    }}
                  >
                    <div className="bg-primary/20 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md">
                      <IconComponent className="text-primary h-3 w-3" />
                    </div>
                    <span className="font-medium">{feature}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative z-10 mt-auto border-t border-zinc-700/50 pt-4">
            <div
              onClick={onLearnMore}
              className={cn(
                'group/start relative',
                'flex items-center justify-between',
                'rounded-lg p-2.5',
                'transition-all duration-200',
                'bg-gradient-to-r from-zinc-800 via-zinc-800 to-zinc-800',
                'hover:from-primary/20 hover:via-primary/10 hover:to-transparent',
                'hover:scale-[1.02] hover:cursor-pointer',
                'hover:border-primary/20 border border-transparent',
              )}
            >
              <span className="group-hover/start:text-primary text-sm font-semibold text-white transition-colors duration-200">
                Learn More
              </span>
              <div className="group/icon relative">
                <div
                  className={cn(
                    'absolute inset-[-6px] rounded-lg transition-all duration-300',
                    'from-primary/20 via-primary/10 bg-gradient-to-br to-transparent',
                    'scale-90 opacity-0 group-hover/start:scale-100 group-hover/start:opacity-100',
                  )}
                />
                <ArrowRight className="text-primary relative z-10 h-4 w-4 transition-all duration-200 group-hover/start:translate-x-1 group-hover/start:scale-110" />
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
