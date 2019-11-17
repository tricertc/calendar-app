import { combineReducers } from 'redux'
import ui from './ui-reducer'
import reminders from './reminders-reducer'

export default combineReducers({
  ui,
  reminders
})
