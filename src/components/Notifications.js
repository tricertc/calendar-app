import React from 'react'
import PropTypes from 'prop-types'
import { Toast } from 'react-bootstrap'
import { connect } from 'react-redux'
import { deleteNotification } from '../lib/actions/notifications-actions'

const REMINDER_DELAY = 2000

function getBgColor (type) {
  switch (type) {
    case 'success':
      return '#d4edda'

    case 'warning':
      return '#fff3cd'

    case 'error':
      return '#f8d7da'

    default:
      return '#ffffff'
  }
}

function Notifications ({ notifications, dismiss }) {
  return (
    <>
      {notifications && notifications.map(note => (
        <Toast
          key={note.id}
          delay={REMINDER_DELAY}
          onClose={() => dismiss(note.id)}
          style={{ position: 'absolute', backgroundColor: getBgColor(note.type) }}
          autohide
          show>
          <Toast.Body>
            {note.text}
          </Toast.Body>
        </Toast>
      ))}
    </>
  )
}

Notifications.propTypes = {
  notifications: PropTypes.array,
  dismiss: PropTypes.func.isRequired
}

function mapStateToProps (state) {
  return {
    notifications: state.notifications
  }
}

function mapDispatchToProps (dispatch) {
  return {
    dismiss (id) {
      dispatch(deleteNotification(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Notifications)
