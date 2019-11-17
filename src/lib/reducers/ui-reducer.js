import * as utils from '../utils/date-utils'
import { NEXT_MONTH, PREVIOUS_MONTH } from '../actions/ui-actions'

const defaultState = {
  year: 2019,
  month: 10
}

/**
 * Manage the "ui" state.
 *
 * @export
 * @param {*} [state=defaultState]
 * @param {*} action
 * @returns
 */
export default function uiReducer (state = defaultState, action) {
  switch (action.type) {
    case NEXT_MONTH:
      return {
        ...state,
        ...utils.getNextMonth(state.year, state.month)
      }

    case PREVIOUS_MONTH:
      return {
        ...state,
        ...utils.getPreviousMonth(state.year, state.month)
      }

    default:
      return state
  }
}
