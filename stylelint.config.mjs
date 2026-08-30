/** @type {import("stylelint").Config} */
export default {
    extends: ["stylelint-config-standard-scss"],
    plugins: ['@stylistic/stylelint-plugin'],
    rules: {
        '@stylistic/indentation': 4,
        "at-rule-no-unknown": null,
        "selector-class-pattern": null,
    }
};
