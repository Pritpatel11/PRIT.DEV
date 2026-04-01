import js from "@eslint/js";
import globals from "globals";

export default [
    js.configs.recommended,
    { ignores: ["dist/**", "node_modules/**"] },
    {
        files: ["**/*.{js,jsx}"],
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node
            },
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        rules: {
            "no-unused-vars": "off",
            "no-case-declarations": "off"
        },
    },
];
