import { Step, Steps } from './';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  component: Steps,
  args: { children: null },
  render: (args) => (
    <Steps {...args}>
      <Step title="Step-by-Step Overlay & AI Voice Assistant">
        Technicians see exactly what to do, overlaid on the physical world with real-time validation
        against your Golden Standard SOPs.
      </Step>
      <Step title="Real-time Validation">
        The system prevents moving to the test cycle until the leveling and connections are
        verified.
      </Step>
      <Step title="Completion Report">
        A detailed report is generated with photos, timestamps, and compliance status.
      </Step>
    </Steps>
  ),
} satisfies Meta<typeof Steps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Small: Story = {
  args: { size: 'sm' },
};

export const WithRichContent: Story = {
  render: (args) => (
    <Steps {...args}>
      <Step title="Install dependencies">
        <code className="bg-muted rounded px-1.5 py-0.5 text-xs">pnpm add veritact</code>
      </Step>
      <Step title="Import the component">Use the named export from the package entry point.</Step>
      <Step title="Add to your page">Wrap your content and pass the required props.</Step>
    </Steps>
  ),
};
