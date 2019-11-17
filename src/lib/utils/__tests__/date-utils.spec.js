import * as SUT from '../date-utils'
import moment from 'moment'

describe('Date utility functions', () => {
  describe('getPreviousMonth', () => {
    it('should return the previous month', () => {
      const result = SUT.getPreviousMonth(2019, 0)
      expect(result.year).toBe(2018)
      expect(result.month).toBe(11)
    })
  })

  describe('getNextMonth', () => {
    it('should return the next month', () => {
      const result = SUT.getNextMonth(2019, 11)
      expect(result.year).toBe(2020)
      expect(result.month).toBe(0)
    })
  })

  describe('isToday', () => {
    it('should return true if date is today', () => {
      const now = moment()
      const result = SUT.isToday(now.year(), now.month(), now.date())
      expect(result).toBe(true)
    })

    it('should return false if date is not today', () => {
      const yesterday = moment().subtract(1, 'day')
      const result = SUT.isToday(yesterday.year(), yesterday.month(), yesterday.date())
      expect(result).toBe(false)
    })
  })
})
