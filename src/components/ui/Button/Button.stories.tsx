import { fn } from 'storybook/test';
import { Button } from './';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  component: Button,
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: 'Button' },
};

export const Destructive: Story = {
  args: { variant: 'destructive', children: 'Destructive' },
};

export const Outline: Story = {
  args: { variant: 'outline', children: 'Outline' },
};

export const Secondary: Story = {
  args: { variant: 'secondary', children: 'Secondary' },
};

export const Link: Story = {
  args: { variant: 'link', children: 'Link' },
};

export const Small: Story = {
  args: { size: 'sm', children: 'Small' },
};

export const Large: Story = {
  args: { size: 'lg', children: 'Large' },
};

export const Icon: Story = {
  args: { size: 'icon', children: '✕' },
};

export const Disabled: Story = {
  args: { disabled: true, children: 'Disabled' },
};
