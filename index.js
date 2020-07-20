const inquirer = require('inquirer')

const { getIp } = require('./tools');

const toolList = [
    {
        type: 'list',
        message: '请选择一个工具:',
        name: 'tool',
        choices: [
          'IP'
        ],
        filter: (val) => {
          return val.toLowerCase();
        }
    }
]

const start = async () => {
 const { tool } = await inquirer.prompt(toolList)

 const toolMap = {
   ip: getIp()
 }

 if (tool && toolMap[tool]) {
  toolMap[tool]()
 }
}

start()
