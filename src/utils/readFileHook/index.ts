// 用于读取文件的方法

const readDir = () => {
  const modules = require.context('~/quec-doc-web/docs/', true, /\.md$/)

  const filesPathArr: string[] = []

  modules.keys().forEach((key) => {
    filesPathArr.push(key)
  })

  console.log(modules.toString())

  return filesPathArr
}

export default {
  readDir
}
