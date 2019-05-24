---
title: Eject 하지않고 webpack 수정하기
date: "2019-05-14T22:40:32.169Z"
description: 리액트 스크립트를 대체하는 react-app-rewired를 이용하면 리액트 스크립트의 웹팩 설정에 새로운 바벨 설정을 주입시킬 수 있다.
tags: ['react', 'react script', 'react app rewired', 'eject', 'create-react-app', 'babel', 'webpack']
category: 
 - javascript
---

리액트 스크립트를 대체하는 react-app-rewired를 이용하면 리액트 스크립트의 웹팩 설정에 새로운 바벨 설정을 주입시킬 수 있다.

```elixir
yarn add react-app-rewired

# 추가 사용할 웹팩 패키지 설치 (데코레이터를 위한 모듈)
yarn add @babel/plugin-proposal-decorators --dev

# CRA v2 에서는 "customize-cra"를 사용해서 babel 설정을 제어한다.
yarn add --dev customize-cra
```

- 프로젝트 루트 디렉토리에 `config-overrides.js` 추가한다.
- 이곳에서 웹팩의 config를 확장시킬 수 있다.

```
/* config-overrides.js */ 

const { override, disableEsLint, addBabelPlugins } = require("customize-cra");

module.exports = override(
  disableEsLint(),
  ...addBabelPlugins([
    "@babel/plugin-proposal-decorators",
    {
      legacy: true
    }
  ])
);
```

package.json 스크립트 변경

```
/* package.json */

"scripts": {
  "start": "react-app-rewired start",
  "build": "react-app-rewired build",
  "test": "react-app-rewired test"
}
```