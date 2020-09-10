const fs = require('fs')

const contentObj = JSON.parse(
  fs.readFileSync('./content/json/content.json', 'utf8')
)

for (const i of contentObj.content) {
  // ディレクトリがなければ作成する
  if (!fs.existsSync(`./pages/${i.tag}`)) {
    fs.mkdir(`./pages/${i.tag}`, { recursive: true }, (err) => {
      if (err) throw err
    })
  }

  if (!fs.existsSync(`./pages/${i.tag}/${i.path}`)) {
    fs.mkdir(`./pages/${i.tag}/${i.path}/`, { recursive: true }, (err) => {
      if (err) throw err
    })
  }

  console.log(i.post)

  const template = `<template>
  <div class="content">
    <div class="content-info">
      <time class="content-date">${i.date}</time>
      <span class="content-tag">${i.tag}</span>
      <h1 class="content-title">${i.title}</h1>
    </div>
    <div class="content-text">
      ${i.post}
    </div>
  </div>
</template>

<script>
export default {
	layout: 'content',
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
  margin: 0.8rem 0;
}
.content-tag {
  display: inline-block;
  font-size: 1.4rem;
  background: #323232;
  color: #fff;
  padding: 0.2rem 1rem;
  border-radius: 3px;
  margin: 0 0 0 1rem;
  transform: translateY(-1px);
}
.content-text {
  margin-top: 2.4rem;
}

.content-text h2 {
  font-size: 2.2rem;
  padding: 1.4rem 0 1.4rem 1.6rem;
  position: relative;
  margin: 5.6rem 0 1rem 0;
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
  font-size: 1.8rem;
  padding: 1.4rem 0;
  margin: 1.8rem 0;
}
.content-text h4 {
  font-size: 1.6rem;
  margin: 2.4rem 0 0.8rem 0;
}
.content-text ul {
  padding-left: 0.8rem;
  margin: 1.6rem 0;
}
.content-text li {
  list-style-type: disc;
  list-style-position: inside;
}
.content-text pre {
  background: #f7f7f9;
  padding: 2rem;
  margin: 0;
  border-radius: 8px;
}
.content-text code {
  font-family: Menlo, Consolas, Liberation Mono, Courier, monospace;
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
  width: 100%
}

.content-text p {
  font-size: 1.6rem;
}
</style>
`
  const categoryPageTemplate = `<template>
  <post-card-list-setter />
</template>

<script>
import postCardListSetter from '@/components/templates/postCardListSetter'
export default {
  components: {
    postCardListSetter,
  },
}
</script>
`

  try {
    fs.writeFileSync(`./pages/${i.tag}/${i.path}/index.vue`, template)
    fs.writeFileSync(`./pages/${i.tag}/index.vue`, categoryPageTemplate)
  } catch (e) {}
}
