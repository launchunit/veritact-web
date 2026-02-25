import { ExternalLink } from './';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'UI/Link',
  component: ExternalLink,
  args: { href: '#', children: 'Link' },
} satisfies Meta<typeof ExternalLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const CustomClass: Story = {
  args: { children: 'Destructive link', className: 'text-destructive' },
};

export const External: Story = {
  args: { href: 'https://example.com', children: 'External link' },
};
