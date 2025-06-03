import SubmitButton from '@/app/ui/components/Buttons/SubmitButton';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof SubmitButton> = {
  title: 'Buttons/SubmitButton',
  component: SubmitButton,
  tags: ['autodocs'],
  args: {
    title: 'Submit',
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Text to display on the submit button',
    },
    onClickAction: {
      action: 'submitted',
      description: 'Function triggered on submit click',
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
          'A primary button used for form submission. Executes the provided handler on click.',
      },
    },
  },
  decorators: [
    (Story) => (
        <div style={{ padding: '1rem', backgroundColor: '#f5f5f5', width:'25%' }}>
          <Story />
        </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof SubmitButton>;

export const Default: Story = {
  name: 'Default Submit Button',
  args: {
    title: 'Submit',
    onClickAction: () => alert('Submit button clicked!'),

  },
};
