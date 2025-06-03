import AddColumnIcon from '@/app/ui/components/Icons/AddColumnIcon';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof AddColumnIcon> = {
  title: 'Icons/AddColumnIcon',
  component: AddColumnIcon,
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

type Story = StoryObj<typeof AddColumnIcon>;

export const Default: Story = {
  args: {
    size: '20',
    fill: '#60a5fa',
    stroke: '#60a5fa',
    strokeWidth: 0,
  },
};
