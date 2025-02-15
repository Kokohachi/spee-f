module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: true,
        tsconfigRootDir: __dirname,
    },
    plugins: ['@typescript-eslint'],
    extends: [
        'eslint:recommended',
        // 'plugin:@typescript-eslint/strict-type-checked',
        'plugin:@typescript-eslint/stylistic-type-checked',
        'prettier',
    ],
    rules: {
        'prettier/prettier': [
            "error",
            {
                "endOfLine": "auto"
            }
            ],
        '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
        // False positive: Function type
        'no-unused-vars': 'off',
        '@typescript-eslint/class-literal-property-style': 'off',
    },
    overrides: [
        {
            files: ['sonolus-cli.config.mjs'],
            env: {
                node: true,
            },
        },
    ],
}
