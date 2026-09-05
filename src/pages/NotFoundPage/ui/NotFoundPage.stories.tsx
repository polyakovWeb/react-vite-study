import { NotFoundPage } from "@/pages/NotFoundPage";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
    component: NotFoundPage,
    title: 'pages/NotFoundPage',
} satisfies Meta<typeof NotFoundPage>

export default meta;
type Story = StoryObj<typeof NotFoundPage>;

export const Default: Story = {}