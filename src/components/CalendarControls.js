import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import moment from 'moment'
import { nextMonth, previousMonth } from '../lib/actions/ui-actions'

/**
 * Renders controls that allow you to move to the next and previous months.
 *
 * @param {*} { year, month, next, previous }
 * @returns
 */
function CalendarControls ({ year, month, next, previous }) {
  const label = moment()
    .year(year)
    .month(month)
    .format('MMMM YYYY')

  return (
    <div className="CalendarControls">
      <button onClick={previous}>-</button>
      {label}
      <button onClick={next}>+</button>
    </div>
  )
}

CalendarControls.propTypes = {
  year: PropTypes.number.isRequired,
  month: PropTypes.number.isRequired,
  next: PropTypes.func.isRequired,
  previous: PropTypes.func.isRequired
}

function mapStateToProps (state) {
  return {
    year: state.ui.year,
    month: state.ui.month
  }
}

function mapDispatchToProps (dispatch) {
  return {
    next: () => dispatch(nextMonth()),
    previous: () => dispatch(previousMonth())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CalendarControls)
