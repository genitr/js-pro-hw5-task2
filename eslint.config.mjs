import js from "@eslint/js";
import globals from "globals";
import pluginJest from 'eslint-plugin-jest';


export default [
    {
        files: ["**/*.{js,mjs,cjs}", "**/*.test.js", "**/__tests__/**/*.js"],
        plugins: {
            js,
            jest: pluginJest,
        },
        rules: {
            "no-unused-vars": "warn",
            "no-console": "off",
            ...js.configs.recommended.rules,
        },
    },
    {
        files: ["**/*.{js,mjs,cjs}", "**/*.test.js", "**/__tests__/**/*.js"],
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
                ...pluginJest.environments.globals.globals,
            },
        },
    },
    {
        ignores: ["coverage/*", "dist/*", "docs/*"],
    }
];
