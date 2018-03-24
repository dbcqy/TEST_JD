module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "jquery":true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module"
    },
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": [
            1,
            "single",
            {allowTemplateLiterals: true}
        ],
        "semi": [
            "error",
            "never"
        ]
    }
};