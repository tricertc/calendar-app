export const NEXT_MONTH = 'next_month'
export const PREVIOUS_MONTH = 'previous_month'
export const SELECT_REMINDER = 'select_reminder'
export const CLEAR_SELECTED_REMINDER = 'clear_selected_reminder'

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

/**
 * Create an action to select a reminder.
 *
 * @export
 * @param {*} id
 * @returns
 */
export function selectReminder (id) {
  return {
    type: SELECT_REMINDER,
    id
  }
}

/**
 * Create an action to clear the selected reminder.
 *
 * @export
 * @returns
 */
export function clearSelectedReminder () {
  return {
    type: CLEAR_SELECTED_REMINDER
  }
}
