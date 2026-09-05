import { MainPage } from "@/pages/MainPage";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
    component: MainPage,
    title: 'pages/MainPage',
} satisfies Meta<typeof MainPage>

export default meta;
type Story = StoryObj<typeof MainPage>;

export const Default: Story = {}