'use client';

import { motion } from 'framer-motion';

const TOKENS = [
  'const',
  'AI',
  'React',
  '{ }',
  'API',
  'GraphQL',
  'async',
  'UX',
  'TS',
  'ship()',
];

export function FloatingParticles() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {TOKENS.map((token, index) => (
        <motion.span
          key={token + index}
          className="absolute rounded-full border border-white/10 bg-white/10 px-3 py-1 font-mono text-xs text-cyan-100 shadow-glow backdrop-blur"
          style={{
            left: `${8 + ((index * 17) % 82)}%`,
            top: `${14 + ((index * 23) % 68)}%`,
          }}
          animate={{
            y: [0, -18, 0],
            opacity: [0.35, 0.9, 0.35],
            rotate: [0, index % 2 ? 4 : -4, 0],
          }}
          transition={{
            duration: 4 + (index % 4),
            repeat: Infinity,
            delay: index * 0.25,
          }}
        >
          {token}
        </motion.span>
      ))}
    </div>
  );
}
