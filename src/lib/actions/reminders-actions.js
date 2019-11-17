export const ADD_REMINDER = 'add_reminder'
export const UPDATE_REMINDER = 'update_reminder'
export const DELETE_REMINDER = 'delete_reminder'

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

/**
 * Create an action to update an existing reminder.
 *
 * @export
 * @param {*} id
 * @param {*} updates
 * @returns
 */
export function updateReminder (id, updates) {
  return {
    type: UPDATE_REMINDER,
    id,
    updates
  }
}

/**
 * Creates an action to delete a reminder by id
 *
 * @export
 * @param {*} id
 * @returns
 */
export function deleteReminder (id) {
  return {
    type: DELETE_REMINDER,
    id
  }
}
