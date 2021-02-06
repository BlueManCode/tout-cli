const { frontend } = require('./frontend/build_frontend')

module.exports = {
  // function to get type of content to interact with
  // like: frontend, backend, mobile, desktop....
  get_type(inquirer) {
    inquirer
    .prompt([
      {
        type: 'list',
        name: 'type',
        message: 'Select Type',
        choices: [
          new inquirer.Separator(),
          'Frontend',
          'Backend',
          'Mobile',
          'Desktop',
        ],
      }
    ])
    .then((res) => {
      switch(res.type) {
        case "Frontend": frontend(inquirer)
          break
        // case "Backend": backend()
        //   break
        // case "Mobile": mobile()
        //   break
        // case "Desktop": desktop()
        //   break
        default: console.log('Type not found!')
      }
    })
  }

}