import BrandIcon from '@/app/ui/components/Icons/BrandIcon';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof BrandIcon> = {
  title: 'Icons/BrandIcon',
  component: BrandIcon,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'text',
      description: 'Width and height of the icon',
      defaultValue: '2em',
    },
    fill: {
      control: 'color',
      description: 'Fill color of the icon',
      defaultValue: 'currentColor',
    },
    stroke: {
      control: 'color',
      description: 'Stroke color of the icon',
      defaultValue: 'currentColor',
    },
    strokeWidth: {
      control: 'number',
      description: 'Width of the stroke',
      defaultValue: 0,
    },
    className: {
      control: 'text',
      description: 'Additional class names',
    },
    style: {
      control: 'object',
      description: 'Inline styles for the icon',
    },
  },
};

export default meta;

type Story = StoryObj<typeof BrandIcon>;

export const Default: Story = {
  args: {
    size: '2em',
    fill: '#4f46e5',
    stroke: '#4f46e5',
    strokeWidth: 0,
  },
};
