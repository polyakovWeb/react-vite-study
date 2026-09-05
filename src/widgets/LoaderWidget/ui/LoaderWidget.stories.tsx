import { LoaderWidget } from "./LoaderWidget"
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
    component: LoaderWidget,
    title: 'widgets/LoaderWidget'
} satisfies Meta<typeof LoaderWidget>;

export default meta;
type Story = StoryObj<typeof LoaderWidget>;

export const Default: Story = {};