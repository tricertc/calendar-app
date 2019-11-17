import * as SUT from '../date-utils'

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
})
