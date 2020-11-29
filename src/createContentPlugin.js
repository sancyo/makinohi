export class CreateContentPlugin {
  apply(compiler) {
    compiler.hooks.watchRun.tapPromise('run', async () => {
      await console.log('finish create content!')
    })
  }
}
