import DeleteIcon from '@/app/ui/components/Icons/DeleteIcon';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof DeleteIcon> = {
  title: 'Icons/DeleteIcon',
  component: DeleteIcon,
  tags: ['autodocs'],
  argTypes: {
    width: { control: 'text' },
    height: { control: 'text' },
    fill: { control: 'color' },
  },
};

export default meta;
type Story = StoryObj<typeof DeleteIcon>;

export const Default: Story = {
  args: {
    width: '2em',
    height: '2em',
    fill: '#dc2626',
  },
};
