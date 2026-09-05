import type { Story } from "storybook/internal/toolsets-docs";
import { MemoryRouter } from "react-router";


export const RouterDecorator = (Story: Story) => (
    <MemoryRouter initialEntries={['/']}>
        <Story/>
    </MemoryRouter>
);