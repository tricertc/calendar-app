import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import moment from 'moment'

/**
 * Render an individual calendar day.
 *
 * @export
 * @param {*} { year, month, date }
 * @returns
 */
function Day ({ year, month, date, getReminders }) {
  const reminders = getReminders(year, month, date)
  const day = moment().year(year).month(month).date(date).day()
  return (
    <pre style={{
      gridColumn: day + 1
    }}>
      {JSON.stringify({ year, month, date, reminders }, null, 2)}
    </pre>
  )
}

Day.propTypes = {
  year: PropTypes.number.isRequired,
  month: PropTypes.number.isRequired,
  date: PropTypes.number.isRequired,
  getReminders: PropTypes.func.isRequired
}

function mapStateToProps (state) {
  return {
    getReminders (year, month, date) {
      return state.reminders.filter(reminder => {
        return reminder.when.year() === year &&
        reminder.when.month() === month &&
        reminder.when.date() === date
      })
    }
  }
}

export default connect(mapStateToProps)(Day)
