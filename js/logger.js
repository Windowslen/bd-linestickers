const about = require('#/package.json')

class Logger {
  static log (message) { console.log(`%c[${about.prettyName}] %c${message}`, 'color: #01B901', '') }
}

module.exports = Logger.log
