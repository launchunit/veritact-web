import { fn } from 'storybook/test';
import { RadioGroup, RadioItem } from './';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  component: RadioGroup,
  args: { onValueChange: fn() },
  render: (args) => (
    <RadioGroup {...args}>
      <label className="flex items-center gap-2">
        <RadioItem value="option-a" /> Option A
      </label>
      <label className="flex items-center gap-2">
        <RadioItem value="option-b" /> Option B
      </label>
      <label className="flex items-center gap-2">
        <RadioItem value="option-c" /> Option C
      </label>
    </RadioGroup>
  ),
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { defaultValue: 'option-a' },
};

export const Unselected: Story = {};

export const Disabled: Story = {
  args: { defaultValue: 'option-a', disabled: true },
};
