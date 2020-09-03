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

  const template = `
<template>
  <div>
    ${i.post}
  </div>
</template>

<script>
export default {
	layout: 'content',
}
</script>
`

  try {
    fs.writeFileSync(`./pages/${i.tag}/${i.path}/index.vue`, template)
  } catch (e) {}
}
