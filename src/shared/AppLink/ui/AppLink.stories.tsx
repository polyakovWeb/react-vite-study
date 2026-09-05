import type { Meta, StoryObj } from '@storybook/react-vite';
import { AppLink } from './AppLink';
import { AppLinkTheme } from "@/shared/AppLink";

const meta = {
    component: AppLink,
    title: 'shared/AppLink'
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof AppLink>

export const Default: Story = {
    args: {
        children: 'Default',
    },
}

export const Primary: Story = {
    args: {
        children: 'Primary',
        theme: AppLinkTheme.PRIMARY
    }
}