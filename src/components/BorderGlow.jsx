import { useCallback, useRef } from 'react';
import './BorderGlow.css';

function parseHsl(value) {
  const match = value.match(/([\d.]+)\s*([\d.]+)%?\s*([\d.]+)%?/);
  return match ? { h: match[1], s: match[2], l: match[3] } : { h: 210, s: 80, l: 70 };
}

export default function BorderGlow({
  children,
  className = '',
  edgeSensitivity = 30,
  glowColor = '210 80 70',
  backgroundColor = 'rgba(255, 255, 255, 0.76)',
  borderRadius = 8,
  glowRadius = 24,
  glowIntensity = 0.7,
  coneSpread = 24,
  colors = ['#1477FF', '#11B7CF', '#CCEBF8'],
}) {
  const cardRef = useRef(null);
  const { h, s, l } = parseHsl(glowColor);

  const handlePointerMove = useCallback((event) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const dx = x - rect.width / 2;
    const dy = y - rect.height / 2;
    const proximity = Math.min(Math.max(Math.max(Math.abs(dx) / (rect.width / 2), Math.abs(dy) / (rect.height / 2)) * 100, 0), 100);
    const angle = Math.atan2(dy, dx) * (180 / Math.PI) + 90;
    card.style.setProperty('--edge-proximity', proximity.toFixed(2));
    card.style.setProperty('--cursor-angle', `${angle}deg`);
  }, []);

  return (
    <div
      ref={cardRef}
      className={`border-glow-card ${className}`}
      onPointerMove={handlePointerMove}
      style={{
        '--card-bg': backgroundColor,
        '--border-radius': `${borderRadius}px`,
        '--glow-padding': `${glowRadius}px`,
        '--edge-sensitivity': edgeSensitivity,
        '--cone-spread': coneSpread,
        '--glow': `hsl(${h}deg ${s}% ${l}% / ${glowIntensity})`,
        '--gradient-one': colors[0],
        '--gradient-two': colors[1],
        '--gradient-three': colors[2],
      }}
    >
      <span className="edge-light" />
      <div className="border-glow-inner">{children}</div>
    </div>
  );
}
