

exports.Db = require(`./db/${process.env.NODE_ENV || 'development'}.db`)
exports.Server = require('./server.config')
exports.Log = require('./log.config')