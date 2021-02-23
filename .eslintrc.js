module.exports = {
    env: {
        jest: true,
        node: true,
    },
    extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'prettier/@typescript-eslint',
    ],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint/eslint-plugin'],
    root: true,
    rules: {
        '@typescript-eslint/explicit-function-return-type': ['error'],
        '@typescript-eslint/explicit-member-accessibility': ['error'],
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/member-ordering': [
            'error',
            {
                default: [
                    'public-static-field',
                    'private-static-field',
                    'public-instance-field',
                    'private-instance-field',
                    'public-constructor',
                    'private-constructor',
                    'public-instance-method',
                    'protected-instance-method',
                    'private-instance-method',
                ],
            },
        ],
        '@typescript-eslint/no-explicit-any': 'off',
        'arrow-parens': ['error', 'always'],
        complexity: ['error', 10],
        indent: [
            'error',
            4,
            {
                SwitchCase: 1,
            },
        ],
        'max-len': [
            'error',
            {
                code: 120,
                ignoreComments: true,
                ignoreTemplateLiterals: true,
                ignoreUrls: true,
                tabWidth: 4,
            },
        ],
        'no-console': ['error'],
        'no-unused-expressions': ['error'],
        quotes: ['error', 'single'],
        'sort-imports': [
            'error',
            {
                allowSeparatedGroups: true,
            },
        ],
        'sort-keys': [
            'error',
            'asc',
            { caseSensitive: true, minKeys: 2, natural: true },
        ],
        'sort-vars': [
            'error',
            {
                ignoreCase: true,
            },
        ],
    },
};
