import js from "@eslint/js";
import globals from "globals";

export default [
    { ignores: ["dist/**"] },
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
            "no-case-declarations": "off",
            "no-undef": "off",
            "no-cond-assign": "off",
            "no-constant-condition": "off",
            "no-empty": "off",
            "no-func-assign": "off",
            "no-prototype-builtins": "off",
            "no-useless-escape": "off",
            "no-sparse-arrays": "off",
            "no-constant-binary-expression": "off",
            "no-useless-assignment": "off"
        },
    },
];
