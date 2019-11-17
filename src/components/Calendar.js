import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

function Calendar ({ year, month, reminders }) {
  return (
    <div className="Calendar">
      <h1>Calendar</h1>
      <pre>
        {JSON.stringify(reminders, null, 2)}
      </pre>
    </div>
  )
}

Calendar.propTypes = {
  year: PropTypes.number.isRequired,
  month: PropTypes.number.isRequired,
  reminders: PropTypes.array
}

function mapStateToProps (state) {
  return {
    year: state.ui.year,
    month: state.ui.month,
    reminders: state.reminders.filter(reminder => {
      return reminder.when.year() === state.ui.year &&
          reminder.when.month() === state.ui.month
    })
  }
}

export default connect(mapStateToProps)(Calendar)
