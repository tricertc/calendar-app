export const DELETE_NOTIFICATION = 'delete_notification'

/**
 * Creates an action to delete a notification.
 *
 * @export
 * @param {string} id
 * @returns
 */
export function deleteNotification (id) {
  return {
    type: DELETE_NOTIFICATION,
    id
  }
}
