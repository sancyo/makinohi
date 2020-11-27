const fs = require('fs')
// const marked = require('marked')

// const PAGES_LIST = ['design', 'dev', 'other']

// ファイルの存在確認を行う関数
/*
function isExistFile(path) {
  return fs.existsSync(path)
}
*/

// ディレクトリを取得する関数
function readDir(path) {
  return fs.readdirSync(path)
}

// ファイルを読み込む関数
/*
function readFile(path) {
  return fs.readFileSync(path, 'utf-8')
}
*/

// 記事をまとめたjsonファイルを作成する関数
// function createContentJson(pagesNameList) {}

export class CreatePagesDir {
  pagesNameList = [] // pagesディレクトリ名を格納する配列
  apply(compiler) {
    compiler.hooks.watchRun.tapPromise('run', async () => {
      const test = await readDir('content/blog')
      console.log(test)
      console.log('finish all !!')
    })
  }
}
