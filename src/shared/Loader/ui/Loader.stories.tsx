import { Loader } from "./Loader"
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
    component: Loader,
    title: 'shared/Loader'
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof Loader>;

export const Default: Story = {};