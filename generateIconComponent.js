const fs = require('fs')

const getIconName = (filename) => filename.replace('-24px.svg', '')

const getComponentName = (filename) => {
  return getIconName(filename)
    .split('_')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('')
}

fs.readdir('./src/icons', (err, filenames) => {
  if (err) {
    console.err(err)
    return
  }

  const content = `
    ${filenames
      .map(
        (filename) =>
          `import {ReactComponent as ${getComponentName(
            filename
          )}} from './icons/${filename}'`
      )
      .join('\n')}

    const MAP = {
      ${filenames
        .map(
          (filename) =>
            `${getIconName(filename)}: ${getComponentName(filename)},`
        )
        .join('\n')}
    }

    const Icon = ({ name, ...props }) => {
      const Component = MAP[name]

      if (!Component) return null;

      return <Component {...props}/>
    }

    export default Icon
  `

  fs.writeFileSync('./src/Icon.js', content)
})
