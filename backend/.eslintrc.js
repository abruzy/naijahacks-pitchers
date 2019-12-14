module.exports = {
    "env":{
        "es6": true,
        "node": true
    },
    "extends": ["airbnb", "prettier", "plugin:node/recommended"],
    "plugins": ["prettier"],
    "rules": {
        "prettier/prettier": "error",
        "no-unused-vars": "warn",
        "no-console": "off",
        "func-names": "off",
        "no-process-exit": "off",
        "object-shorthand": "off",
        "class-method-use-this": "off",
        "no-use-before-define": "off",
        "react/jsx-filename-extension": "off",
        "no-restricted-globals": "off",
        "import/no-dynamic-require": "off"
    }
};