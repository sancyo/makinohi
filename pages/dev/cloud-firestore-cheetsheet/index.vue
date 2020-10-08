<template>
  <div class="content">
    <div class="content-info">
      <time class="content-date">2020/10/08</time>
      <h1 class="content-title">チートシート【Cloud Firestore編】</h1>
      <post-tag tag="dev" />
    </div>
    <div class="content-text">
      <p>Cloud Firestore で使うメソッドをまとめる。</p>
      <h2>ドキュメントを取得する</h2>
      <h3>get()</h3>
      <pre><code>//参照するドキュメントを指定
const docRef = db.collection(&quot;&lt;コレクション名&gt;&quot;).doc(&quot;&lt;ドキュメント名&gt;&quot;)

docRef
  .get().then(function(doc) {
    if (doc.exists) {
        // // ドキュメントを取得できた時の処理
        console.log(&quot;取得したドキュメントデータ:&quot;, doc.data())
    } else {
        // ドキュメントが存在しなかった時の処理
        console.log(&quot;指定したドキュメントは存在しません！&quot;)
    }
  })
  .catch(function(error) {
    //エラーが発生した時の処理
    console.log(&quot;エラー:&quot;, error)
  });</code></pre>
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
