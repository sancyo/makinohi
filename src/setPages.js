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
  margin: 5rem 0px 1.2rem
}

.content-text p {
  font-size: 1.6rem;
}

.content-text img {
  width: 100%
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
