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
    // Zakaz stosowanie ++ i -- wszedzie poza p??tlami
    "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],
    "no-param-reassign": ["error", { "props": false }],
    // WYGL??D
    // Odst??py w nawiasach
    "array-bracket-spacing": ["error", "always", { "arraysInArrays": false }],
    // Nawiasy w parametrach funkcji (Kiedy Wymagany)
    "arrow-parens": ["error", "as-needed"],
    // Odst??p miedzy strza??k?? z przodu i z ty??u
    "arrow-spacing": ["error", { "before": true, "after": true }],
    // Odst??py w blokach {}
    "block-spacing": "error",
    // ??amanie funkcji ,klas,obiekt??w z wyj??tkiem jednoliniowych
    "brace-style": ["error", "stroustrup", { "allowSingleLine": true }],
    // Stawianie przecink??w na ko??cu :
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
    // Odst??py po przecinkach
    "comma-spacing": ["error", { "before": false, "after": true }],
    // Odst??py w klasach
    "computed-property-spacing": ["error", "always"],
    // miejsce kropki po w??asciwosci
    "dot-location": ["error", "property"],
    // miejsce po nazwie funkcji
    // "func-call-spacing": ["error", "always"],
    // Argumenty funkcji w nowej lini
    "function-call-argument-newline": ["error", "never"],
    // Argumenty funkcji w nowej lini min 3
    // "function-paren-newline": ["error", { "minItems": 2 }],
    // ??amanie lini po strza??ce funkcji
    "implicit-arrow-linebreak": ["error", "below"],
    // Wci??cia Tab
    "indent": ["error", 2, { "ignoredNodes": ["ConditionalExpression"] }],
    // Cudzys????w poj. w jsx
    "jsx-quotes": ["error", "prefer-single"],
    // Odst??py miedzy kluczem i wartoscia w obiekcie
    // "key-spacing": ["error", { "align": "colon" }],
    // Odst??p prze lini?? komentarza
    "lines-around-comment": ["error", { "beforeLineComment": true }],
    // Odst??p miedzy w??a??ciwo??ciami i metodami w klasach
    "lines-between-class-members": ["error", "always"],
    // Max d??ugo???? tekstu
    // "max-len": ["warn", { "code": 80, "tabWidth": 6, "ignoreComments": true }],
    // ??amanie warunku trujargumentowego
    "multiline-ternary": ["error", "never"],
    // Nowa linia w chainingu
    "newline-per-chained-call": ["error", { "ignoreChainWithDepth": 2 }],
    // Us??wanie wolnych pustych spacji
    "no-multi-spaces": "error",
    // Us??wanie wolnych enter??w
    "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 0 }],
    "no-whitespace-before-property": "error",
    // ??amanie obiekt??w
    "object-curly-newline": ["error", { "consistent": true }],
    // ??redniki
    "semi": "error",
    // Cudzys????w pojedy??czy
    "quotes": ["error", "single"],
    // Cudzys????w w obiektach na kluczu
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
