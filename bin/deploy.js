const fs = require('fs')
require('dotenv').config()
// eslint-disable-next-line
let temp = fs.readFileSync(__dirname + '/contentful.json.sample') + ''

temp = temp
  .replace('DEV_SPACE_ID', process.env.SPACE_ID)
  .replace('PROD_SPACE_ID', process.env.SPACE_ID)
  .replace('DEV_ACCESS_TOKEN', process.env.DEV_ACCESS_TOKEN)
  .replace('PROD_ACCESS_TOKEN', process.env.PROD_ACCESS_TOKEN)
// eslint-disable-next-line
fs.writeFileSync(__dirname + '/../.contentful.json', temp)
