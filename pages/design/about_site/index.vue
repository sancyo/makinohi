<template>
  <div class="content">
    <div class="content-info">
      <time class="content-date">2020/09/13</time>
      <h1 class="content-title">新しくブログを制作した</h1>
      <post-tag tag="design" />
    </div>
    <div class="content-text">
      <p>
        <img src="@/content/blog/about_site/eye-catch.png" alt="DUST CASE" />
      </p>
      <p>日々学習したことを、ここにまとめていく。</p>
      <h2>このサイトについて</h2>
      <h2>使用した技術</h2>
      <h3>開発言語</h3>
      <ul>
        <li>Nuxt.js (サイトの静的化)</li>
        <li>Node.js (ルーティング用のファイル生成)</li>
      </ul>
      <h3>ライブラリ</h3>
      <ul>
        <li>Marked.js</li>
        <li>Normalize.css</li>
      </ul>
      <p>詳細は後日まとめる予定</p>
      <h2>今後の改善点</h2>
      <p>
        サイトを形にすることを優先したため、多くの粗がある。今後は以下の点を中心に改善を行っていく。
      </p>
      <ul>
        <li>マークダウンのホットリロード対応</li>
        <li>目次を追加</li>
        <li>一度に表示する記事数に制限を設ける</li>
      </ul>
    </div>
  </div>
</template>

<script>
import postTag from '@/components/atoms/postTag'
export default {
  layout: 'content',
  components: {
    postTag,
  },
}
</script>

<style scoped>
.content {
  background: #fff;
  width: 55%;
  padding: 5rem 7rem;
  border-radius: 10px;
}
.content-date {
  font-size: 1.4rem;
}
.content-title {
  font-size: 2.4rem;
  font-weight: bold;
  margin: 0.4rem 0 1.6rem 0;
}
.content-tag {
  display: inline-block;
  font-size: 1.4rem;
  background: #323232;
  color: #fff;
  padding: 0.2rem 1rem;
  border-radius: 3px;
  transform: translateY(-1px);
}
.content-text {
  margin-top: 2.4rem;
}

.content-text h2 {
  font-size: 2.2rem;
  padding: 1.4rem 0 1.4rem 1.6rem;
  position: relative;
  margin: 4rem 0 1rem 0;
}
.content-text h2::after {
  position: absolute;
  content: '';
  top: 50%;
  left: 0;
  width: 5px;
  height: 80%;
  background: #323232;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  border-radius: 3px;
}
.content-text h3 {
  font-size: 1.7rem;
  padding: 0.8rem 0 0.4rem 0;
  margin: 0;
}
.content-text h4 {
  font-size: 1.6rem;
  margin: 2.4rem 0 0.8rem 0;
}
.content-text ul {
  padding-left: 0.8rem;
  margin: 1.2rem 0 1.8rem 0;
  font-size: 1.6rem;
}
.content-text li {
  list-style-type: disc;
  list-style-position: inside;
  margin: 0.6rem 0;
}
.content-text pre {
  background: #f7f7f9;
  padding: 2rem;
  border-radius: 8px;
  margin-top: 1.2rem;
  line-height: 1.5;
}
.content-text code {
  font-family: Menlo, Consolas, Liberation Mono, Courier, monospace;
  font-size: 1.4rem;
}
.content-text a {
  color: #20a8ea;
}
.content-text a:hover {
  text-decoration-line: underline;
}
.content-text hr {
  border-color: #fafafa;
  margin: 4rem 0;
}
.content-text strong {
  display: block;
  margin-bottom: 0.8rem;
}
.content-text img {
  width: 100%;
  margin-bottom: 1.8rem;
}

.content-text p {
  font-size: 1.6rem;
}
</style>
