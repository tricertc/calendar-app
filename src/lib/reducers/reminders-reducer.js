import uuid from 'uuid/v4'
import moment from 'moment'
import { ADD_REMINDER, DELETE_REMINDER, UPDATE_REMINDER } from '../actions/reminders-actions'

const defaultState = [
  {
    id: uuid(),
    when: moment(),
    message: 'Implement reminders',
    color: 'mediumseagreen'
  },
  {
    id: uuid(),
    when: moment().add(4, 'hours'),
    message: 'Implement reminders',
    color: 'mediumseagreen'
  },
  {
    id: uuid(),
    when: moment().subtract(1, 'hour'),
    message: 'Implement reminders',
    color: 'mediumseagreen'
  }
]

/**
 * Manage the "reminders" state.
 *
 * @export
 * @param {*} [state=defaultState]
 * @param {*} action
 * @returns
 */
export default function remindersReducer (state = defaultState, action) {
  switch (action.type) {
    case ADD_REMINDER:
      return [
        ...state,
        {
          id: uuid(),
          ...action.reminder
        }
      ]

    case UPDATE_REMINDER:
      return state.map(reminder => {
        if (reminder.id === action.id) {
          return {
            ...reminder,
            ...action.updates
          }
        }
        return reminder
      })

    case DELETE_REMINDER:
      return state.filter(reminder => reminder.id !== action.id)

    default:
      return state
  }
}
