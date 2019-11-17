import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { selectReminder } from '../../lib/actions/ui-actions'

function Reminder ({ reminder, select }) {
  const { when, message, color } = reminder

  return (
    <div className="Reminder" style={{ backgroundColor: color }} onClick={() => select(reminder.id)}>
      <div className="when">{when.format('hh:mm a')}</div>
      <div className="message">{message}</div>
    </div>
  )
}

Reminder.propTypes = {
  reminder: PropTypes.shape({
    id: PropTypes.string.isRequired,
    when: PropTypes.object.isRequired,
    message: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
  }).isRequired,
  select: PropTypes.func.isRequired
}

function mapDispatchToProps (dispatch) {
  return {
    select (id) {
      return dispatch(selectReminder(id))
    }
  }
}

export default connect(null, mapDispatchToProps)(Reminder)
