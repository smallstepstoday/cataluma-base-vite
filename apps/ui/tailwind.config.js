import preset from '../../tailwind.preset.js';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    '../../packages/components/lib/*.tsx',
  ],
  presets: [preset],
};
