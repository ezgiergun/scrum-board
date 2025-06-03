import AddColumnIcon from '@/app/ui/components/Icons/AddColumnIcon';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof AddColumnIcon> = {
  title: 'Icons/AddColumnIcon',
  component: AddColumnIcon,
  tags: ['autodocs'],
  argTypes: {
    width: { control: 'text' },
    height: { control: 'text' },
    color: { control: 'color' },
  },
};

export default meta;
type Story = StoryObj<typeof AddColumnIcon>;

export const Default: Story = {
  args: {
    width: '2em',
    height: '2em',
    color: '#60a5fa',
  },
};
