import { describe, expect, test } from 'vitest'
import { classNames } from "@/shared/lib/classNames/classnames.ts";

describe('classnames', () => {
    test('only one classname', () => {
        expect(classNames('only classname'))
            .toBe('only classname')
    })

    test('classnames with additional', () => {
        expect(classNames('classname', {}, ['add1', undefined, 'add2']))
            .toBe('classname add1 add2')
    })

    test('classnames with mods', () => {
        expect(classNames('classname', {hovered: true, bordered: false, emptyProp: '', stringProp: 'no empty string'}))
            .toBe('classname hovered stringProp')
    })

    test('classnames order: cls additional mods', () => {
        expect(classNames('classname', {mods: true}, ['additional']))
            .toBe('classname additional mods')
    })
})