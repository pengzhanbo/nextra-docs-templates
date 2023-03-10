const TAILWIND_CONFIG = {
  extends: ["plugin:tailwindcss/recommended"],
  rules: {
    "tailwindcss/classnames-order": "off", // conflicts with prettier-plugin-tailwindcss
    "tailwindcss/enforces-negative-arbitrary-values": "error",
    "tailwindcss/enforces-shorthand": "error",
    "tailwindcss/migration-from-tailwind-2": "error",
    "tailwindcss/no-custom-classname": "error",
  },
};

/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  reportUnusedDisableDirectives: true,
  ignorePatterns: ["next-env.d.ts"],
  overrides: [
    // Rules for all files
    {
      files: "**/*.{js,jsx,cjs,mjs,ts,tsx,cts,mts}",
      extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:import/typescript",
        "prettier",
      ],
      plugins: ["import", "unicorn"],
      rules: {
        "prefer-object-has-own": "error",
        "logical-assignment-operators": [
          "error",
          "always",
          { enforceForIfStatements: true },
        ],
        "@typescript-eslint/prefer-optional-chain": "error",
        "no-else-return": ["error", { allowElseIf: false }],
        "no-lonely-if": "error",
        "prefer-destructuring": [
          "error",
          { VariableDeclarator: { object: true } },
        ],
        "import/no-duplicates": "error",
        "no-negated-condition": "off",
        "unicorn/no-negated-condition": "error",
        "prefer-regex-literals": ["error", { disallowRedundantWrapping: true }],
        // todo: enable
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/ban-ts-comment": "off",
      },
    },
    // Rules for React files
    {
      files: "**",
      extends: [
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "plugin:react-hooks/recommended",
        "plugin:@next/next/recommended",
      ],
      rules: {
        "react/prop-types": "off",
        "react/no-unknown-property": ["error", { ignore: ["jsx"] }],
        "react-hooks/exhaustive-deps": "error",
        "react/self-closing-comp": "error",
        "no-restricted-syntax": [
          "error",
          {
            // ❌ useMemo(…, [])
            selector:
              "CallExpression[callee.name=useMemo][arguments.1.type=ArrayExpression][arguments.1.elements.length=0]",
            message:
              "`useMemo` with an empty dependency array can't provide a stable reference, use `useRef` instead.",
          },
          {
            // ❌ z.object(…)
            selector:
              "MemberExpression[object.name=z] > .property[name=object]",
            message: "Use z.strictObject is more safe.",
          },
        ],
        "react/jsx-filename-extension": [
          "error",
          { extensions: [".tsx", ".jsx"], allow: "as-needed" },
        ],
        "react/jsx-curly-brace-presence": "error",
        "react/jsx-boolean-value": "error",
      },
      settings: {
        react: { version: "detect" },
      },
    },
    // Rules for TypeScript files
    {
      files: "**/*.{ts,tsx,cts,mts}",
      extends: [
        // TODO: fix errors
        // 'plugin:@typescript-eslint/recommended-requiring-type-checking'
      ],
      parserOptions: {
        project: [
          "tsconfig.json",
        ],
      },
      rules: {
        "@typescript-eslint/no-unnecessary-type-assertion": "error",
        "@typescript-eslint/consistent-type-imports": "error",
      },
    },
    {
      ...TAILWIND_CONFIG,
      files: "**",
      plugins: ["typescript-sort-keys"],
      settings: {
        tailwindcss: {
          config: "tailwind.config.js",
          callees: ["cn"],
          whitelist: ["nextra-breadcrumb", "nextra-callout", "nextra-bleed"],
        },
      },
      rules: {
        ...TAILWIND_CONFIG.rules,
        "no-restricted-imports": [
          "error",
          {
            name: "next/link",
            message: "Use local <Anchor /> instead",
          },
        ],
      },
    },
    {
      files: [
        "prettier.config.js",
        "postcss.config.js",
        "tailwind.config.js",
        "next.config.js",
        ".eslintrc.cjs",
      ],
      env: {
        node: true,
      },
    },
    {
      files: "**",
      rules: {
        // disable rule because we don't have pagesDir in above folders
        "@next/next/no-html-link-for-pages": "off",
      },
    },
    {
      files: ["**/*.d.ts"],
      rules: {
        "no-var": "off",
      },
    },
  ],
};
