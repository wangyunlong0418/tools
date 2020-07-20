const ip = require('ip')
const chalk = require('chalk');

const getIp = () => {
  return console.log(`IP: ${chalk.green(ip.address())}`)
}


module.exports ={
  getIp
}
