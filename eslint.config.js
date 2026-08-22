import js from "@eslint/js";
import globals from "globals";

export default [
    js.configs.recommended,
    {
        files: ["**/*.{js,jsx}"],
        ignores: ["dist/**"],
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
                __REACT_DEVTOOLS_GLOBAL_HOOK__: "readonly"
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
