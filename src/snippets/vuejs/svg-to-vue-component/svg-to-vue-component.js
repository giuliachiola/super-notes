/* eslint-disable no-console */

function toPascalCase(str) {
  return str.replace(/\w+/g, function (w) {
    return w[0].toUpperCase() + w.slice(1).toLowerCase();
  }).replace(/-/g, '')
}

const path = require('path')
const fs = require('fs')

const srcPath = 'test/svg'
const destPath = 'test/vue'

fs.readdir(srcPath, (err, files) => {
  files.forEach(iconFile => {
    if (iconFile.startsWith('.')) { // hidden files (es. .DS_store)
      return
    }

    // Read svg files
    let data

    try {
      data = fs.readFileSync(`${srcPath}/${iconFile}`, 'utf8')
      // console.log(data)
    } catch (err) {
      console.error(err)
    }

    // Generate vue component content
    const fileName = toPascalCase(path.parse(iconFile).name) // remove .svg at the end => https://stackoverflow.com/a/31615711/8343240

    const fileContent = `<template>
    ${data}
    </template>
    <script lang="js">
      export default  {
        name: '${fileName}',

        props: {

        },
    }
    </script>

    <style lang="scss">
      // .${iconFile} {}
    </style>
    `

    // Write vue icon file

    const filepath = `${destPath}/${fileName}.vue`

    if (data) {
      fs.writeFile(filepath, fileContent, (err) => {
        if (err) throw err

        console.log(`The file ${fileName} was succesfully saved!`)
      })
    }
  })
})
