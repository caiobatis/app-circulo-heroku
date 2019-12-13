import { merge } from 'lodash'

const development = {
  api: {
    baseURL: 'http://zero.us-east-1.elasticbeanstalk.com/api'
  }
}

const test = merge({}, development, {})

const production = {
  api: {
    baseURL: 'http://zero.us-east-1.elasticbeanstalk.com/api'
  }
}

const stage = merge({}, production, {})

export default {
  development,
  test,
  production,
  stage
}
