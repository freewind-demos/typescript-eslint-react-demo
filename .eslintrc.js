/** @type {import('eslint').Linter.Config} */
module.exports = {
    "parser": "@typescript-eslint/parser",
    parserOptions: {
        project: './tsconfig.json'
    },
    extends: ['standard', 'standard-react', 'standard-with-typescript'],
    "plugins": ["@typescript-eslint/eslint-plugin", "react", "react-hooks"],

};
