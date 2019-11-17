import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux'
import moment from 'moment'
import AddReminderButton from './reminders/AddReminderButton'
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
    <div className="CalendarControls mb-2 h2">
      <div className="row">
        <div className="col-4 text-right">
          <Button variant="default" onClick={previous}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </Button>
        </div>
        <div className="col-4 text-center">
          {label}
        </div>
        <div className="col-4">
          <div className="row">
            <div className="col-4">
              <Button variant="default" onClick={next}>
                <FontAwesomeIcon icon={faChevronRight} />
              </Button>
            </div>
            <div className="col-8 text-right">
              <AddReminderButton />
            </div>
          </div>
        </div>
      </div>
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
