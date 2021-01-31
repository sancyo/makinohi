---
title: 気が向いたのでダークモードを実装した。
date: 2020/12/10
category: design
tag: [note, page-history]
---

あるツイートに触発され、ダークモードを実装した

## 使い方
ダークモードの切り替えは、ヘッダーに配置したトグルから行う。
当然ページをリロードしても、選択したモードが維持されるようになっている。

## デザインについて
### 文字色
はじめ文字色は`#ffffff`を指定していたが画面のギラつきが気になった。そのため明度を少し下げた`#c9d1d9`を採用している。

### テーマカラー
メインカラーに`#1f2023`、サブカラーに`#34363a`を設定してある。CSSカスタムプロパティを用いて、
テーマカラーの変更を簡単に行えるようにした。気が向いたら他の配色も試してみたい。

## 触発元

<blockquote class="twitter-tweet" data-theme="dark"><p lang="ja" dir="ltr">皆さん、ついにGitHubにダークモードがやってきました！百聞は一見にしかず、設定はこちらから。 <a href="https://t.co/K1JwykFVnl">https://t.co/K1JwykFVnl</a><a href="https://twitter.com/hashtag/GitHubUniverse?src=hash&amp;ref_src=twsrc%5Etfw">#GitHubUniverse</a> <a href="https://t.co/SqQXdi0Ang">pic.twitter.com/SqQXdi0Ang</a></p>&mdash; GitHub Japan (@GitHubJapan) <a href="https://twitter.com/GitHubJapan/status/1336528746354855936?ref_src=twsrc%5Etfw">December 9, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
