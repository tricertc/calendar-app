import uuid from 'uuid/v4'
import moment from 'moment'
import { ADD_REMINDER } from '../actions/reminders-actions'

const defaultState = [
  {
    id: uuid(),
    when: moment(),
    message: 'Implement reminders',
    color: 'mediumseagreen'
  },
  {
    id: uuid(),
    when: moment().add(2, 'month').subtract(4, 'days'),
    message: 'Implement multiple months',
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

    default:
      return state
  }
}
