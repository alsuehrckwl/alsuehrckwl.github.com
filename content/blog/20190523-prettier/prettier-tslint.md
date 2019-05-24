---
title: Create React App에 tslint + prettier 적용하기
date: "2019-05-23T08:53:22.640Z"
description: cra 프로젝트에 tslint와 prettier 적용하기
tags: ['tslint', 'prettier']
---

현재 프로젝트를 진행할 때 prettier formatter를 사용하고있다. 

다양한 lint들이 많고 react쪽에서는 airbnb룰을 많이 사용하는데 이 글에서는 최대한 간단한 rule만 적용하도록 한다.

### Dependencies

1. prettier
2. husky
3. lint-staged
4. tslint-config-prettier
5. tslint-plugin-prettier

```
    npm install --save lint-staged husky
    npm install --save-dev prettier tslint-config-prettier tslint-plugin-prettier
    
    # or
    
    yarn add lint-staged husky
    yarn add --dev prettier tslint-config-prettier tslint-plugin-prettier
```

---

### prettier 세팅

`.prettierrc` 를 사용하여 formatter의 룰을 정의해준다.

```
{
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false,
  "semi": true,
  "singleQuote": true,
  "trailingComma": "all",
  "bracketSpacing": false,
  "jsxBracketSameLine": false,
  "proseWrap": "always"
}
```
---

### husky, lint-staged

프로젝트에서 prettier를 사용할 때 .vscode 폴더의 settings.json을 통해 저장할 때마다 formatting되도록 세팅하였는데 개발 중 저장할 때 마다 줄바뀜이나 여러가지 불편한 점들을 느껴 git commit시에 prettier가 작동하도록 설정하였다.

husky의 hooks를 사용하여 git commit을 하면 prettier 적용

`package.json`에 다음과 같이 작성한다.

```
"husky": {
  "hooks": {
    "pre-commit": "lint-staged"
  }
}
```

lint-staged 를 사용하여 prettier를 적용 할 대상들을 설정한다. 

```
"lint-staged": {
  "src/**/*.{js,jsx,ts,tsx,json,css,scss,md}": [
    "prettier --write",
    "git add"
  ]
}
```

---

### tslint-config-prettier

https://github.com/prettier/tslint-config-prettier 참조하여 적용

---

### tslint-plugin-prettier

https://github.com/prettier/tslint-plugin-prettier 참조하여 적용