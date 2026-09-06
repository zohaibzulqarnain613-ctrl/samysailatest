import React, { useState, useEffect } from 'react';
import VaporizeTextCycle, { Tag } from './ui/vapour-text-effect';

interface ResponsiveVaporizeTextProps {
  texts: string[];
  color?: string;
  spread?: number;
  density?: number;
  animation?: {
    vaporizeDuration?: number;
    fadeInDuration?: number;
    waitDuration?: number;
  };
  direction?: "left-to-right" | "right-to-left";
  alignment?: "left" | "center" | "right";
  tag?: Tag;
}

const ResponsiveVaporizeText: React.FC<ResponsiveVaporizeTextProps> = ({
  texts,
  color = "rgb(147, 197, 253)",
  spread = 4,
  density = 7,
  animation = {
    vaporizeDuration: 1.8,
    fadeInDuration: 0.8,
    waitDuration: 1.2
  },
  direction = "left-to-right",
  alignment = "center",
  tag = Tag.H2
}) => {
  const [fontSize, setFontSize] = useState(32);

  useEffect(() => {
    let timeoutId: number;
    const updateFontSize = () => {
      const width = window.innerWidth;
      let newSize = 32;
      if (width < 640) {
        newSize = 24;
      } else if (width < 768) {
        newSize = 28;
      }
      
      if (newSize !== fontSize) {
        setFontSize(newSize);
      }
    };

    const debouncedUpdate = () => {
      clearTimeout(timeoutId);
      timeoutId = window.setTimeout(updateFontSize, 150);
    };

    updateFontSize();
    window.addEventListener('resize', debouncedUpdate);
    return () => {
      window.removeEventListener('resize', debouncedUpdate);
      clearTimeout(timeoutId);
    };
  }, [fontSize]);

  return (
    <VaporizeTextCycle
      texts={texts}
      font={{
        fontFamily: "Inter, sans-serif",
        fontSize: `${fontSize}px`,
        fontWeight: 700
      }}
      color={color}
      spread={spread}
      density={density}
      animation={animation}
      direction={direction}
      alignment={alignment}
      tag={tag}
    />
  );
};

export default ResponsiveVaporizeText;
