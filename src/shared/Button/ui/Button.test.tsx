import { describe, expect, test } from 'vitest'
import { Button, ButtonTheme } from "@/shared/Button";
import { render, screen } from "@testing-library/react";
import cls from "./Button.module.scss"

describe('test button', () => {
    test('render button', () => {
        render(<Button>BUTTON TEST</Button>);
        expect(screen.getByText("BUTTON TEST"))
            .toBeInTheDocument();
        screen.debug();
    })

    test('render button with clear theme', () => {
        render(<Button theme={ButtonTheme.CLEAR}>CLEAR BUTTON TEST</Button>);
        const expectClearButton = expect(screen.getByText("CLEAR BUTTON TEST"))
        expectClearButton.toBeInTheDocument();
        expectClearButton.toHaveClass(cls.clear)
        screen.debug();
    })
})