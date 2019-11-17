export const NEXT_MONTH = 'next_month'
export const PREVIOUS_MONTH = 'previous_month'

/**
 * Create an action to move to the following mnth.
 *
 * @export
 * @returns
 */
export function nextMonth () {
  return {
    type: NEXT_MONTH
  }
}

/**
 * Create an action to move to the previous month.
 *
 * @export
 * @returns
 */
export function previousMonth () {
  return {
    type: PREVIOUS_MONTH
  }
}
