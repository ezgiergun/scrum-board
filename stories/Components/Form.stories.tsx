import SubmitButton from '@/app/ui/components/Buttons/SubmitButton';
import Form from '@/app/ui/components/Form';
import Input from '@/app/ui/components/Input';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Form> = {
  title: 'Components/Form',
  component: Form,
  tags: ['autodocs'],
  argTypes: {
    modalName: { control: 'text' },
    className: { control: 'text' },
    onSubmitAction: { action: 'submitted' },
  },
  decorators: [
    (Story) => (
      <div className="w-1/2 bg-white p-4">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Form>;

export const Default: Story = {
  render: (args) => (
    <Form
      {...args}
      onSubmitAction={(e) => {
        e.preventDefault();
        alert('Form submitted!');
      }}
    >
      <Input placeholder="Enter text..." />
      <SubmitButton title="Submit" />
    </Form>
  ),
  args: {
    modalName: 'storybook-form',
  },
};
