
// Note: require this file in the index of the project inorder to use absolute path
// Note: require this file in every single file if servless function 

const moduleAlias = require('module-alias')
const dotenv = require("dotenv")
const path = require("path")

moduleAlias.addAliases({
    'src': __dirname + '/../src',
})

const envPath = path.join(__dirname, '.env')

const result = dotenv.config({ path: envPath })
if (result.error) throw result.error

module.exports = result
