import type { Meta, StoryObj } from '@storybook/react';
import AddIcon from '../../../app/ui/components/Icons/AddIcon';

const meta: Meta<typeof AddIcon> = {
  title: 'Icons/AddIcon',
  component: AddIcon,
  tags: ['autodocs'],
  argTypes: {
    width: { control: 'text' },
    height: { control: 'text' },
    fill: { control: 'color' },
  },
};

export default meta;
type Story = StoryObj<typeof AddIcon>;

export const Default: Story = {
  args: {
    width: '2em',
    height: '2em',
    fill: '#4ade80',
  },
};
