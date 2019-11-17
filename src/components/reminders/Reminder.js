import React from 'react'
import PropTypes from 'prop-types'

export default function Reminder ({ reminder }) {
  const { when, message, color } = reminder

  return (
    <div className="Reminder" style={{ backgroundColor: color }}>
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
  }).isRequired
}
