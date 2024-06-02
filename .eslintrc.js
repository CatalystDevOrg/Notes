module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    ignorePatterns: ['package.json', 'dist/', '.gitignore'],
    extends: 'eslint:recommended',
    overrides: [
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    rules: {
        'indent': [
            'error',
            4
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'always'
        ],
        'no-undef': 'off',
        'no-unused-vars': 'off'
    }
};
