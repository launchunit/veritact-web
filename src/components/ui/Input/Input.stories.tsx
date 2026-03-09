import { fn } from 'storybook/test';
import { Input } from './';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  component: Input,
  args: { onChange: fn() },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { placeholder: 'Email address' },
};

export const Disabled: Story = {
  args: { disabled: true, placeholder: 'Disabled' },
};

export const WithValue: Story = {
  args: { defaultValue: 'hello@example.com' },
};
