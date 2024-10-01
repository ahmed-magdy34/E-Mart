import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export default [
  { ignores: ["dist"] },
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        module: "readonly", // Allow `module` as a global variable
      },
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
    settings: { react: { version: "18.3" } },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,
      ...reactHooks.configs.recommended.rules,
      "react/jsx-no-target-blank": "off",
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],

      // Set specific rules to 'warn' or 'info'
      "no-unused-vars": "warn", // Show as a warning, not an error
      "no-console": "warn", // Show as a warning, not an error

      // Disable prop-types rule to prevent warnings
      "react/prop-types": "off", // Disable prop-types rule for React components
    },
  },
  {
    // Optional: Use overrides for specific files if needed
    files: ["tailwind.config.js", "postcss.config.js"], // Specify any config files
    env: {
      node: true, // Enable Node.js globals for these files
    },
  },
];
