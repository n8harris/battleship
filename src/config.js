/* eslint-disable no-unused-vars */
import path from 'path'
import _ from 'lodash'

const config = {
  all: {
    env: 'development',
    root: path.join(__dirname, '..'),
    port: process.env.PORT || 9000,
    ip: process.env.IP || '0.0.0.0',
    mongo: {
      options: {
        db: {
          safe: true
        }
      }
    }
  },
  development: {
    mongo: {
      uri: 'mongodb://localhost/battleship-developer-exercise-dev',
      options: {
        debug: true
      }
    }
  }
}

module.exports = _.merge(config.all, config[config.all.env])
export default module.exports
