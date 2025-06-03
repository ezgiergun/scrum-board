import MagicWandIcon from '@/app/ui/components/Icons/MagicWandIcon';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof MagicWandIcon> = {
  title: 'Icons/MagicWandIcon',
  component: MagicWandIcon,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'text',
      description: 'Width and height of the icon',
    },
    fill: {
      control: 'color',
      description: 'Fill color of the icon',
    },
    stroke: {
      control: 'color',
      description: 'Stroke color of the icon',
    },
    strokeWidth: {
      control: 'number',
      description: 'Width of the stroke',
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

type Story = StoryObj<typeof MagicWandIcon>;

export const Default: Story = {
  args: {
    size: '20',
    fill: '#22d3ee',
    stroke: '#22d3ee',
    strokeWidth: 0,
  },
};
