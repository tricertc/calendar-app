export const ADD_REMINDER = 'add_reminder'

/**
 * Create an actin to add a new reminder.
 *
 * @export
 * @param {Date} when
 * @param {string} message
 * @param {string} color
 * @returns
 */
export function addReminder (when, message, color) {
  return {
    type: ADD_REMINDER,
    reminder: {
      when,
      message,
      color
    }
  }
}
