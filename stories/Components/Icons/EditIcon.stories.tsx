import EditIcon from '@/app/ui/components/Icons/EditIcon';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof EditIcon> = {
  title: 'Icons/EditIcon',
  component: EditIcon,
  tags: ['autodocs'],
  argTypes: {
    width: { control: 'text' },
    height: { control: 'text' },
    fill: { control: 'color' },
  },
};

export default meta;
type Story = StoryObj<typeof EditIcon>;

export const Default: Story = {
  args: {
    width: '2em',
    height: '2em',
    fill: '#facc15',
  },
};
