import uuid from 'uuid/v4'
import { DELETE_NOTIFICATION } from '../actions/notifications-actions'
import { ADD_REMINDER, DELETE_REMINDER, UPDATE_REMINDER } from '../actions/reminders-actions'

function createNotification (text, type = 'success') {
  return {
    id: uuid(),
    text,
    type
  }
}

export default function notificationsReducer (state = [], action) {
  switch (action.type) {
    case ADD_REMINDER:
      return [
        ...state,
        createNotification('Reminder added!')
      ]

    case DELETE_REMINDER:
      return [
        ...state,
        createNotification('Reminder deleted.', 'warning')
      ]

    case UPDATE_REMINDER:
      return [
        ...state,
        createNotification('Reminder updated!')
      ]

    case DELETE_NOTIFICATION:
      return state.filter(notification => notification.id !== action.id)

    default:
      return state
  }
}
