import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";

export default [
    js.configs.recommended,
    {
        ignores: ["dist/**", "build/**"],
    },
    {
        files: ["**/*.{js,jsx}"],
        plugins: {
            react,
        },
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
            },
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
                ecmaVersion: "latest",
                sourceType: "module"
            },
        },
        rules: {
            "react/jsx-uses-react": "error",
            "react/jsx-uses-vars": "error",
            "no-unused-vars": "off",
            "no-case-declarations": "off"
        },
    },
];
