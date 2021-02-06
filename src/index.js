const inquirer = require('inquirer')
const cp = require('child_process')

const { get_type } = require('./commands/get_type')


function backend() {
  console.log('backend')
}

function mobile() {
  console.log('mobile')
}

function desktop() {
  console.log('dektop')
}

get_type(inquirer)


