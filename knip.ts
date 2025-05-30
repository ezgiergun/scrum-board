import type { KnipConfig } from 'knip';

const config: KnipConfig = {
  entry: [
    'app/**/*.{ts,tsx,js,jsx,mdx}',
    'components/**/*.{ts,tsx,js,jsx}',
    'lib/**/*.{ts,tsx,js,jsx}',
  ],
  project: ['**/*.{ts,tsx,js,jsx,mdx}'],
};

export default config;
