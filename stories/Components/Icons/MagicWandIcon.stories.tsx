import MagicWandIcon from '@/app/ui/components/Icons/MagicWandIcon';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof MagicWandIcon> = {
  title: 'Icons/MagicWandIcon',
  component: MagicWandIcon,
  tags: ['autodocs'],
  argTypes: {
    width: { control: 'text' },
    height: { control: 'text' },
    color: { control: 'color' },
  },
};

export default meta;
type Story = StoryObj<typeof MagicWandIcon>;

export const Default: Story = {
  args: {
    width: '2em',
    height: '2em',
    color: '#8b5cf6',
  },
};
