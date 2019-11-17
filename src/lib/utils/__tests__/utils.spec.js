import * as SUT from '../index'
import moment from 'moment'

describe('General utility functions', () => {
  describe('sortReminders', () => {
    it('should sort reminders from oldest to newest', () => {
      const now = { id: 1, when: moment() }
      const inFourHours = { id: 2, when: moment().add(4, 'hours') }
      const oneHourAgo = { id: 3, when: moment().subtract(1, 'hour') }

      const result = SUT.sortReminders([now, inFourHours, oneHourAgo])

      expect(result[0]).toBe(oneHourAgo)
      expect(result[1]).toBe(now)
      expect(result[2]).toBe(inFourHours)
    })
  })
})
