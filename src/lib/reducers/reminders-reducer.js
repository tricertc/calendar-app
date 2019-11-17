import uuid from 'uuid/v4'
import moment from 'moment'

const defaultState = [
  {
    id: uuid(),
    when: moment(),
    message: 'Implement reminders',
    color: 'mediumseagreen'
  },
  {
    id: uuid(),
    when: moment().add(2, 'month'),
    message: 'Implement multiple months',
    color: 'mediumseagreen'
  }
]

export default function remindersReducer (state = defaultState, action) {
  switch (action.type) {
    default:
      return state
  }
}
