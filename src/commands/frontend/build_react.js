module.exports = {
  build_react(inquirer) {
    inquirer.prompt([
      {
        type: 'input',
        name: 'folder_name',
        message: 'Folder name?',
        default: 'client'
      }
    ])
    .then(res => {
      console.log(res)
    })
  }
}