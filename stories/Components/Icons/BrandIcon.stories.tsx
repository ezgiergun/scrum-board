import BrandIcon from '@/app/ui/components/Icons/BrandIcon';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof BrandIcon> = {
  title: 'Icons/BrandIcon',
  component: BrandIcon,
  tags: ['autodocs'],
  argTypes: {
    width: { control: 'text' },
    height: { control: 'text' },
    color: { control: 'color' },
  },
};

export default meta;
type Story = StoryObj<typeof BrandIcon>;

export const Default: Story = {
  args: {
    width: '2.5em',
    height: '2.5em',
    color: '#f97316',
  },
};
