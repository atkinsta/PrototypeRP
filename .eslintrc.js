module.exports = {
    'env': {
        'node': true,
        'es6': true
    },
    'extends': 'eslint:recommended',
    'rules': {
        'indent': [2, 4],
        'semi': [2, 'always'],
        'brace-style': [1, '1tbs'],
        'array-bracket-spacing': [2, 'never'],
        'camelcase': [2, {'properties': 'always'}],
        'keyword-spacing': [2],
        'eol-last': [2],
        'no-unused-vars': [1]
    },
    'globals': {
        'mp': true,
        '$': true,
        'document': true,
        'window': true
    }
};