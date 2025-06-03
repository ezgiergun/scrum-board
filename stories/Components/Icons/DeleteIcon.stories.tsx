import DeleteIcon from '@/app/ui/components/Icons/DeleteIcon';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof DeleteIcon> = {
  title: 'Icons/DeleteIcon',
  component: DeleteIcon,
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

type Story = StoryObj<typeof DeleteIcon>;

export const Default: Story = {
  args: {
    size: '20',
    fill: '#f87171',
    stroke: '#f87171',
    strokeWidth: 0,
  },
};
