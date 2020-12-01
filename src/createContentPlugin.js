const fs = require('fs')
const marked = require('marked')

marked.setOptions({
  headerIds: false,
})

const MD_CONTENT_PATH = 'content/blog' // マークダウンファイルの親パス
const CATEGORY_PATH = [
  { path: '' },
  { path: 'dev' },
  { path: 'design' },
  { path: 'other' },
]
const CATEGORY_PAGE_TEMPLATE = `<template>
<post-card-list-setter :list="content" />
</template>

<script>
import postCardListSetter from '@/components/templates/postCardListSetter'

export default {
components: {
  postCardListSetter,
},
data() {
  return {
    content: {{template}},
  }
},
}
</script>`

function getMdContent(path) {
  const mdDirList = fs.readdirSync(path)
  const summary = { content: [] }

  for (const i of mdDirList) {
    try {
      // メタ情報、本文を格納する配列
      const obj = {}

      // ファイルの読み込み
      const mdData = fs.readFileSync(`./content/blog/${i}/index.md`, 'utf8')

      // 記事のメタ情報
      const mdMeta = mdData
        .split('---')[1]
        .split(/\r\n|\r|\n/)
        .filter((x) => {
          return x !== ''
        })

      // 記事本文
      const mdBody = marked(mdData.split('---')[2].replace('\n', ''))

      // 記事のメタ情報をオブジェクトに格納
      for (const j of mdMeta) {
        obj[j.split(':')[0]] = j.split(':')[1].replace(' ', '')
      }
      // 記事本文をオブジェクトに格納
      obj.body = mdBody

      // 記事のファイル名をオブジェクトに格納
      obj.path = i

      // おおもとのオブジェクトに追加
      summary.content.push(obj)
    } catch (err) {
      console.log(err.message)
    }
  }
  return summary
}

// 記事情報をまとめたJSONファイルを作成する関数
function createContentJson(obj) {
  const contentJson = JSON.stringify(obj, null, '  ')
  fs.writeFileSync('./content/json/content.json', contentJson)
}

function createPagesDir(obj) {
  for (const i of CATEGORY_PATH) {
    if (!fs.existsSync(`./pages/${i.path}`)) {
      fs.mkdirSync(`./pages/${i.path}`)
    }
  }
  for (const j of obj.content) {
    if (!fs.existsSync(`./pages/${j.tag}/${j.path}`)) {
      fs.mkdirSync(`./pages/${j.tag}/${j.path}`)
    }
  }
  for (const k of CATEGORY_PATH) {
    let sortContentList = obj.content

    // リストからbodyプロパティを削除
    for (const l in sortContentList) {
      delete sortContentList[l].body
    }

    // リストをカテゴリー別にソート
    if (k.path !== '') {
      sortContentList = obj.content.filter((item) => item.tag === k.path)
    }

    fs.writeFileSync(
      `./pages/${k.path}/index.vue`,
      CATEGORY_PAGE_TEMPLATE.replace(
        '{{template}}',
        JSON.stringify(sortContentList)
      )
    )
  }
}

export class CreateContentPlugin {
  apply(compiler) {
    compiler.hooks.watchRun.tapPromise('run', async () => {
      const contentObj = await getMdContent(MD_CONTENT_PATH)
      await createContentJson(contentObj)
      await createPagesDir(contentObj)
      await console.log('finish create content!')
      // await console.log('finish create content!')
    })
  }
}
