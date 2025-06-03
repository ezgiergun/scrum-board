import CloseIcon from '@/app/ui/components/Icons/CloseIcon';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof CloseIcon> = {
  title: 'Icons/CloseIcon',
  component: CloseIcon,
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

type Story = StoryObj<typeof CloseIcon>;

export const Default: Story = {
  args: {
    size: '20',
    fill: '#ef4444',
    stroke: '#ef4444',
    strokeWidth: 0,
  },
};
