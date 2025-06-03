import CancelButton from '@/app/ui/components/Buttons/CancelButton';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof CancelButton> = {
  title: 'Buttons/CancelButton',
  component: CancelButton,
  tags: ['autodocs'],
  args: {
    title: 'Cancel',
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Text to display inside the button',
    },
    onClickAction: {
      action: 'clicked',
      description: 'Function to call when the button is clicked',
    },
    className: {
      control: 'text',
      description: 'Your classnames will have priority over the default styles',
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'A cancel button used in forms or modals. Calls a provided handler when clicked.',
      },
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{ padding: '1rem', backgroundColor: '#f5f5f5', width: '25%' }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof CancelButton>;

export const Default: Story = {
  name: 'Default Cancel Button',
  args: {
    title: 'Cancel',
    onClickAction: () => alert('Cancel button clicked!'),
  },
};
