import type { Meta, StoryObj } from "@storybook/react-vite";
import { NavBar } from "./NavBar";

const meta = {
    component: NavBar,
    title: 'widgets/NavBar'
} satisfies Meta<typeof NavBar>;

export default meta;
type Story = StoryObj<typeof NavBar>;

export const Default: Story = {};