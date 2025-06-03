import CloseIcon from '@/app/ui/components/Icons/CloseIcon';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof CloseIcon> = {
  title: 'Icons/CloseIcon',
  component: CloseIcon,
  tags: ['autodocs'],
  argTypes: {
    width: { control: 'text' },
    height: { control: 'text' },
    color: { control: 'color' },
  },
};

export default meta;
type Story = StoryObj<typeof CloseIcon>;

export const Default: Story = {
  args: {
    width: 32,
    height: 32,
    color: '#ef4444',
  },
};
