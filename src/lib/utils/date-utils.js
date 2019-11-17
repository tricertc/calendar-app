import moment from 'moment'

/**
 * Get the previous month
 *
 * @export
 * @param {number} year - The year.
 * @param {number} month - The month. (0-based index)
 * @returns
 */
export function getPreviousMonth (year, month) {
  const previous = moment().year(year).month(month).subtract(1, 'month')

  return {
    year: previous.year(),
    month: previous.month()
  }
}

/**
 * Get the next month.
 *
 * @export
 * @param {number} year - The year.
 * @param {number} month - The month. (0-based index)
 * @returns
 */
export function getNextMonth (year, month) {
  const next = moment().year(year).month(month).add(1, 'month')

  return {
    year: next.year(),
    month: next.month()
  }
}

/**
 * Check if the input year/month/date represent today.
 *
 * @export
 * @param {number} year
 * @param {number} month
 * @param {number} date
 * @returns
 */
export function isToday (year, month, date) {
  const input = moment().year(year).month(month).date(date)
  return moment().diff(input, 'days') === 0
}
