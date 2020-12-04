---
title: Pythonのデコレーターについて
date: 2020/10/15
category: dev
tag: [Python]
---

Pythonのデコレーターについてまとめる。

> ### デコレーター
> 関数の中身を書き換えることなく、関数の性質を追加できる仕組み

### 記法
```py[notation.py]
@deco # デコレーター
def hello_world(): # 機能を拡張したい関数
```


### 例
```py[app.py]
from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello_world():
  return 'hello flask world !'
```

文字列を返す関数`hello_world()`に`指定したパスにアクセスしたときに実行する関数`という性質を追加している。
