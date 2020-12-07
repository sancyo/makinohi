---
title: Nuxtで自作のwebpack Loaderを使う時のテンプレート
date: 2020/10/25
category: dev
tag: [Nuxt, webpack]
---

自作のWebpack LoaderをNuxtで使用する時の設定をまとめる。

### 構成
```[config]
root
  ├ components
  | └ index.vue
  ├ lib
  |  └ myWebpackLoader.js
  └ nuxt.config.js
```

## 手順
### 1. nuxt.config.jsに自作ローダーを登録する
```js[nuxt.config.js]
export default {
  build: {
    extend(config) {
      config.resolveLoader.alias = {
        'my-webpack-loader': require('path').resolve(
          __dirname,
          'lib/myWebpackLoader.js'
        )
      }
      config.module.rules.push({
        enforce: 'pre',
        test: /\.(vue)$/,
        loader: 'my-webpack-loader',
        exclude: /node_module/,
      })
    }
  }
}
```

### 2. webpack loaderを書く
```js[myWebpackLoader.js]
// Loaderが読み込んだファイルをターミナルに出力する
module.exports = function(source) {
  console.log(source)
  return source
}
```

### 3. 実行
```[terminal]
yarn dev
```
コンパイル毎に自作ローダーが走るようになる。