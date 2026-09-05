import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './Button';
import { ButtonTheme } from "../config/ButtonTheme";
import { Story } from "@storybook/addon-docs/blocks";

const meta = {
    component: Button,
    title: 'shared/Button'
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>

export const Default: Story = {
    args: {
        children: 'Default',
    },
}

export const Clear: Story = {
    args: {
        theme: ButtonTheme.CLEAR,
        children: 'Clear',
    }
}

export const Outline: Story = {
    args: {
        theme: ButtonTheme.OUTLINE,
        children: 'Outline',
    }
}