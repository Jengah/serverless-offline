import { createUniqueId } from '../../utils/index.js'
import { env } from 'node:process'

export default class ScheduleEvent {
  account = createUniqueId()

  detail = {};

  ['detail-type'] = 'Scheduled Event'

  console.log('ACCOUNTID BEING USED:')
  console.log(env.SLS_ACCOUNT_ID)

  id = env.SLS_ACCOUNT_ID || createUniqueId()

  region = null

  resources = []

  source = 'aws.events'

  // format of aws displaying the time, e.g.: 2020-02-09T14:13:57Z
  time = new Date().toISOString().replaceAll(/\.(.*)(?=Z)/g, '')

  version = '0'

  constructor(region) {
    this.region = region
  }
}
