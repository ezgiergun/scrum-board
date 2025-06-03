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
    className: { control: false },
      onSubmitAction: { action: 'submitted' },
  },
  decorators: [
    (Story) => (
        <div style={{ padding: '1rem', backgroundColor: '#f5f5f5', width:'55%' }}>
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
