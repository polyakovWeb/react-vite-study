import type { Meta, StoryObj } from "@storybook/react-vite";
import { SideBar } from "./SideBar";

const meta = {
    component: SideBar,
    title: 'widgets/SideBar'
} satisfies Meta<typeof SideBar>;

export default meta;
type Story = StoryObj<typeof SideBar>;

export const Default: Story = {};