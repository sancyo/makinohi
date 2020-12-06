---
title: ＠nuxt/contentのcontent:file:beforeParseについて
date: 2020/12/06
category: dev
tag: [Nuxt]
---

nuxt/contentで提供されるフック、content:file:beforeParseを使ったサンプル

> ### content:file:beforeParse
> nuxt/contentがファイルを処理する前に、任意のデータを追加できる。

## 作例
### 構成
```md[config]
root
  ├ content
  | └ index.md
  └ nuxt.config.js
```

### 要素
mdファイル内の任意の文字列を置換するサンプル

```md[content/index.md]

### sample
{{ text }}
```

```js[nuxt.config.js]
export default {
  hooks: {
    'content:file:beforeParse': (file) => {
      if (file.extension === '.md') {
        file.data = file.data.replace('{{ text }}', 'hello_world !')
      }
    },
  },
}
```

### 実行
```md[terminal]
yarn dev
```

mdファイル内の`{{ text }}`が`hello_world !`に置換される。