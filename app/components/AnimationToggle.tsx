'use client';

interface AnimationToggleProps {
  animationType: 'particles' | 'bubbles';
  onToggle: () => void;
}

export default function AnimationToggle({ animationType, onToggle }: AnimationToggleProps) {
  return (
    <button
      onClick={onToggle}
      style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        zIndex: 1000,
        background: 'rgba(92, 179, 179, 0.9)',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        padding: '12px 16px',
        fontSize: '14px',
        fontFamily: 'SF Mono, Fira Code, Fira Mono, Roboto Mono, monospace',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'rgba(74, 157, 157, 0.95)';
        e.currentTarget.style.transform = 'translateY(-2px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'rgba(92, 179, 179, 0.9)';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      {animationType === 'particles' ? '🫧 Bubbles' : '⚡ Particles'}
    </button>
  );
}
