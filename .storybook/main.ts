import { dirname, join } from 'node:path';
import type { StorybookConfig } from '@storybook/nextjs';

const getAbsolutePath = (value: string) =>
  dirname(require.resolve(join(value, 'package.json')));

const config: StorybookConfig = {
  webpackFinal: async (config) => {
    config.ignoreWarnings = [() => true];
    return config;
  },
  stories: [
    '../stories/**/*.mdx',
    '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    getAbsolutePath('@storybook/addon-onboarding'),
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@chromatic-com/storybook'),
    getAbsolutePath('@storybook/addon-interactions'),
    getAbsolutePath('@storybook/addon-themes'),
  ],
  framework: {
    name: getAbsolutePath('@storybook/nextjs'),
    options: {},
  },
  staticDirs: ['../public'],
};

export default config;
