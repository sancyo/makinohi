const fs = require('fs')
const marked = require('marked')

marked.setOptions({
  headerIds: false,
})

const MD_CONTENT_PATH = 'content/blog' // マークダウンファイルの親パス

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

export class CreateContentPlugin {
  apply(compiler) {
    compiler.hooks.watchRun.tapPromise('run', async () => {
      const contentObj = await getMdContent(MD_CONTENT_PATH)
      await createContentJson(contentObj)
      await console.log('finish create content!')
    })
  }
}
