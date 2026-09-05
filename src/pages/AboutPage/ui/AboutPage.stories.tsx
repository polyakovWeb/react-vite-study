import { AboutPage } from "@/pages/AboutPage";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
    component: AboutPage,
    title: 'pages/AboutPage',
} satisfies Meta<typeof AboutPage>

export default meta;
type Story = StoryObj<typeof AboutPage>;

export const Default: Story = {}