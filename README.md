# jongho

## eslint, prettier

`yarn add -D eslint prettier eslint-plugin-prettier eslint-config-prettier`

.eslintrc.json
https://eslint.org/docs/rules/

```
{
    "plugins": ["prettier"],
    "extends": ["eslint:recommended", "plugin:prettier/recommended"],
    "rules": {
        "prettier/prettier": "error"
    }
}
```

.prettierrc.json
https://prettier.io/docs/en/options.html

```
{
    "trailingComma": "es5",
    "tabWidth": 2,
    "semi": true,
    "singleQuote": true
}

```
