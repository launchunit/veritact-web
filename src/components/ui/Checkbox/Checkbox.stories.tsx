import { fn } from 'storybook/test';
import { Checkbox, CheckboxGroup } from './';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  component: Checkbox,
  args: { onCheckedChange: fn() },
  render: (args) => (
    <label className="flex cursor-pointer items-center gap-2">
      <Checkbox {...args} /> Accept terms and conditions
    </label>
  ),
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Indeterminate: Story = {
  args: { indeterminate: true },
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const DisabledChecked: Story = {
  args: { disabled: true, defaultChecked: true },
};

export const Group: Story = {
  render: (args) => (
    <CheckboxGroup defaultValue={['option-a']}>
      <label className="flex cursor-pointer items-center gap-2">
        <Checkbox {...args} value="option-a" /> Option A
      </label>
      <label className="flex cursor-pointer items-center gap-2">
        <Checkbox {...args} value="option-b" /> Option B
      </label>
      <label className="flex cursor-pointer items-center gap-2">
        <Checkbox {...args} value="option-c" /> Option C
      </label>
    </CheckboxGroup>
  ),
};
