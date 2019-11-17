import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import moment from 'moment'
import Reminder from './reminders/Reminder'
import { sortReminders } from '../lib/utils'
import { isToday as getIsToday } from '../lib/utils/date-utils'

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
  const isToday = getIsToday(year, month, date)

  return (
    <div className={isToday ? 'Day today' : 'Day'} style={{ gridColumn: day + 1 }}>
      <div className="date">{date}</div>
      <div className="reminders">
        {reminders.map(reminder => <Reminder key={reminder.id} reminder={reminder} />)}
      </div>
    </div>
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
      const filteredReminders = state.reminders.filter(reminder => {
        return reminder.when.year() === year &&
        reminder.when.month() === month &&
        reminder.when.date() === date
      })

      return sortReminders(filteredReminders)
    }
  }
}

export default connect(mapStateToProps)(Day)
