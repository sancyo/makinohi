---
title: チートシート【Cloud Firestore編】
date: 2020/10/08
category: dev
---

Cloud Firestore で使うメソッドをまとめる。

## ドキュメントを取得する

### get()

```js[index.js]
//参照するドキュメントを指定
const docRef = db.collection("<コレクション名>").doc("<ドキュメント名>")

docRef
  .get().then(function(doc) {
    if (doc.exists) {
        // // ドキュメントを取得できた時の処理
        console.log("取得したドキュメントデータ:", doc.data())
    } else {
        // ドキュメントが存在しなかった時の処理
        console.log("指定したドキュメントは存在しません！")
    }
  })
  .catch(function(error) {
    //エラーが発生した時の処理
    console.log("エラー:", error)
  });
```
