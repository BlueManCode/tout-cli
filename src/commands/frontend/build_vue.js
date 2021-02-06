module.exports = {
  build_vue(inquirer) {
    inquirer.prompt([
      {
        type: 'input',
        name: 'folder_name',
        message: 'Folder Name?',
        default: 'client'
      }
    ])
    .then(res => {
      console.log(res)
    })
  }
}