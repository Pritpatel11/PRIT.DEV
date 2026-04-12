import js from "@eslint/js";
import globals from "globals";

export default [
    { ignores: ["dist/**", "build/**", "node_modules/**"] },
    js.configs.recommended,
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
