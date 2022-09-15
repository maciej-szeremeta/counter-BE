module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir : __dirname, 
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
        "no-console": "off",
    "strict": "off",
    "import/prefer-default-export": "off",
    "no-underscore-dangle": "off",
    "no-restricted-syntax": [
      "error",
      {
        "selector": "CallExpression[callee.object.name='console'][callee.property.name!=/^(log|warn|error|info|trace)$/]",
        "message": "Unexpected property on console object was called"
      }
    ],
    // Sortowanie zasady import
    // "sort-imports": [
    //   "error",
    //   {
    //     "ignoreCase": false,
    //     "ignoreDeclarationSort": false,
    //     "ignoreMemberSort": false,
    //     "memberSyntaxSortOrder": ["all", "single", "multiple", "none"],
    //     "allowSeparatedGroups": true
    //   }
    // ],
    // Sortowanie importu
    // "import/order": [
    //   "error",
    //   {
    //     "alphabetize": { "order": "asc", "caseInsensitive": true },
    //     "warnOnUnassignedImports": true,
    //     "newlines-between": "always",
    //     "pathGroups": [
    //       {
    //         "pattern": "~/record",
    //         "group": "external"
    //       }
    //     ],
    //     "groups": [
    //       "external",
    //       "object",
    //       "index",
    //       "sibling",
    //       "parent",
    //       "internal",
    //       "builtin",
    //       "type"
    //     ]
    //   }
    // ],
    // Zakaz stosowanie ++ i -- wszedzie poza pętlami
    "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],
    "no-param-reassign": ["error", { "props": false }],
    // WYGLĄD
    // Odstępy w nawiasach
    "array-bracket-spacing": ["error", "always", { "arraysInArrays": false }],
    // Nawiasy w parametrach funkcji (Kiedy Wymagany)
    "arrow-parens": ["error", "as-needed"],
    // Odstęp miedzy strzałką z przodu i z tyłu
    "arrow-spacing": ["error", { "before": true, "after": true }],
    // Odstępy w blokach {}
    "block-spacing": "error",
    // Łamanie funkcji ,klas,obiektów z wyjątkiem jednoliniowych
    "brace-style": ["error", "stroustrup", { "allowSingleLine": true }],
    // Stawianie przecinków na końcu :
    "comma-dangle": [
      "error",
      {
        "arrays": "always",
        "objects": "always",
        "imports": "always",
        "exports": "always",
        "functions": "never"
      }
    ],
    // Odstępy po przecinkach
    "comma-spacing": ["error", { "before": false, "after": true }],
    // Odstępy w klasach
    "computed-property-spacing": ["error", "always"],
    // miejsce kropki po własciwosci
    "dot-location": ["error", "property"],
    // miejsce po nazwie funkcji
    // "func-call-spacing": ["error", "always"],
    // Argumenty funkcji w nowej lini
    "function-call-argument-newline": ["error", "never"],
    // Argumenty funkcji w nowej lini min 3
    // "function-paren-newline": ["error", { "minItems": 2 }],
    // Łamanie lini po strzałce funkcji
    "implicit-arrow-linebreak": ["error", "below"],
    // Wcięcia Tab
    "indent": ["error", 2, { "ignoredNodes": ["ConditionalExpression"] }],
    // Cudzysłów poj. w jsx
    "jsx-quotes": ["error", "prefer-single"],
    // Odstępy miedzy kluczem i wartoscia w obiekcie
    // "key-spacing": ["error", { "align": "colon" }],
    // Odstęp prze linią komentarza
    "lines-around-comment": ["error", { "beforeLineComment": true }],
    // Odstęp miedzy właściwościami i metodami w klasach
    "lines-between-class-members": ["error", "always"],
    // Max długość tekstu
    // "max-len": ["warn", { "code": 80, "tabWidth": 6, "ignoreComments": true }],
    // łamanie warunku trujargumentowego
    "multiline-ternary": ["error", "never"],
    // Nowa linia w chainingu
    "newline-per-chained-call": ["error", { "ignoreChainWithDepth": 2 }],
    // Usówanie wolnych pustych spacji
    "no-multi-spaces": "error",
    // Usówanie wolnych enterów
    "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 0 }],
    "no-whitespace-before-property": "error",
    // Łamanie obiektów
    "object-curly-newline": ["error", { "consistent": true }],
    // Średniki
    "semi": "error",
    // Cudzysłów pojedyńczy
    "quotes": ["error", "single"],
    // Cudzysłów w obiektach na kluczu
    "quote-props": ["error", "consistent"],
    "no-use-before-define": "off",
    "object-curly-spacing": [
      "error",
      "always",
      { "arraysInObjects": false, "objectsInObjects": false }
    ],
    "prettier/prettier": ["off", {}]
  },
};
