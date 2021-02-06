const { build_react } = require('./build_react')
const { build_vue } = require('./build_vue')

module.exports = {
  frontend(inquirer) {
      inquirer.prompt([
        {
          type: 'list',
          name: 'framework',
          message: 'Which framework do you want to use?',
          choices: [
            "React",
            "Vue",
            "Angular",
            "Svelte"
          ],
        }
    ])
    .then((res) => {
      switch (res.framework) {
        case 'React': build_react(inquirer)
          break
        case 'Vue': build_vue(inquirer)
          break
        default: console.log(`${res.framework} option WIP! 😞`)
          break
      }
    })
  }
}