import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import moment from 'moment'
import Day from './Day'

const Header = props => {
  const cols = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  return (
    <div className="header" {...props}>
      {cols.map(c => <div key={c}>{c}</div>)}
    </div>
  )
}

/**
 * Renders a single month calendar view.
 *
 * @param {*} { year, month, reminders }
 * @returns
 */
function Calendar ({ year, month }) {
  const dt = moment().year(year).month(month)
  const numDays = dt.daysInMonth()

  return (
    <div className="Calendar">
      <Header style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(7, 1fr)',
        textAlign: 'center'
      }}/>
      <div className="days" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(7, 1fr)'
      }}>
        {Array(numDays).fill(null).map((_, i) => (
          <Day
            key={dt.date(i + 1).format('YYYYMMDD')}
            year={year}
            month={month}
            date={i + 1}
          />
        ))}
      </div>
      <em>...reminders...</em>
    </div>
  )
}

Calendar.propTypes = {
  year: PropTypes.number.isRequired,
  month: PropTypes.number.isRequired
}

function mapStateToProps (state) {
  return {
    year: state.ui.year,
    month: state.ui.month
  }
}

export default connect(mapStateToProps)(Calendar)
