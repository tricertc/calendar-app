import { combineReducers } from 'redux'
import ui from './ui-reducer'
import reminders from './reminders-reducer'
import notifications from './notifications-reducer'

export default combineReducers({
  ui,
  reminders,
  notifications
})
