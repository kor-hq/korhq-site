import js from "@eslint/js";
import typescript from "typescript-eslint";
import astro from "eslint-plugin-astro";
import svelte from "eslint-plugin-svelte";
import svelteParser from "svelte-eslint-parser";
import globals from "globals";

export default [
  js.configs.recommended,
  ...typescript.configs.recommended,
  ...astro.configs.recommended,
  ...svelte.configs["flat/recommended"],
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        console: "readonly",
      },
      ecmaVersion: 2022,
      sourceType: "module",
    },
  },
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      parser: typescript.parser,
      parserOptions: {
        project: "./tsconfig.json",
        extraFileExtensions: [".svelte"],
      },
    },
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          ignoreRestSiblings: true,
        },
      ],
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          prefer: "type-imports",
          fixStyle: "inline-type-imports",
        },
      ],
      "@typescript-eslint/triple-slash-reference": "off",
    },
  },
  {
    files: ["**/*.svelte"],
    languageOptions: {
      parser: svelteParser,
      parserOptions: {
        parser: typescript.parser,
        project: "./tsconfig.json",
        extraFileExtensions: [".svelte"],
      },
      globals: {
        ...globals.browser,
        console: "readonly",
      },
    },
    rules: {
      "svelte/no-at-html-tags": "error",
      "svelte/valid-compile": "error",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
    },
  },
  {
    files: ["**/*.astro"],
    rules: {
      "astro/no-conflict-set-directives": "error",
      "astro/no-unused-define-vars-in-style": "warn",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
    },
  },
  {
    files: ["**/*.d.ts"],
    rules: {
      "@typescript-eslint/triple-slash-reference": "off",
      "@typescript-eslint/no-unused-vars": "off",
    },
  },
  {
    ignores: [
      "dist/",
      ".astro/",
      "node_modules/",
      "*.min.js",
      ".prettierrc.mjs",
      "eslint.config.js",
    ],
  },
];
