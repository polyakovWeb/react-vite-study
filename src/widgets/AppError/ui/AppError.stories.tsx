import { AppError } from "./AppError"
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
    component: AppError,
    title: 'widgets/AppError',
    args: {
        error: {
            message: "Mock error",
            name: "error",
        },
        resetError: () => console.log('Сброс ошибки')
    }
} satisfies Meta<typeof AppError>;

export default meta;
type Story = StoryObj<typeof AppError>;

export const Default: Story = {};