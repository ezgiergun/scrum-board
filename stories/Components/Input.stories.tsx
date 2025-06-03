import Input from '@/app/ui/components/Input';
import type { InputRef } from '@/app/ui/components/Input';
import type { Meta, StoryObj } from '@storybook/react';
import { useRef } from 'react';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    initialValue: { control: 'text' },
    placeholder: { control: 'text' },
    className: { control: 'text' },
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
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    initialValue: '',
    placeholder: 'Type something...',
  },
};

export const WithRefExample: Story = {
  render: (args) => {
    const inputRef = useRef<InputRef>(null);

    return (
      <div className="space-y-4">
        <Input ref={inputRef} {...args} />

        <div className="flex gap-2">
          <button
            onClick={() => alert(inputRef.current?.getValue())}
            className="rounded bg-freespeechblue-500 px-3 py-1 text-white"
            type="button"
          >
            Get Value
          </button>
          <button
            onClick={() => inputRef.current?.focus()}
            className="rounded bg-periwinkle-500 px-3 py-1 text-white"
            type="button"
          >
            Focus
          </button>
        </div>
      </div>
    );
  },
  args: {
    initialValue: 'Input value',
    placeholder: 'Enter text...',
  },
};
