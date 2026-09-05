import { ThemeSwitcher } from "./ThemeSwitcher"
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
    component: ThemeSwitcher,
    title: 'widgets/ThemeSwitcher'
} satisfies Meta<typeof ThemeSwitcher>;

export default meta;
type Story = StoryObj<typeof ThemeSwitcher>;

export const Default: Story = {};