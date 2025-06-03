import AddIcon from '@/app/ui/components/Icons/AddIcon';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof AddIcon> = {
  title: 'Icons/AddIcon',
  component: AddIcon,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'text',
      description: 'Sets both width and height of the icon',
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

type Story = StoryObj<typeof AddIcon>;

export const Default: Story = {
  args: {
    size: '20',
    fill: '#22c55e',
    stroke: '#22c55e',
    strokeWidth: 0,
  },
};
