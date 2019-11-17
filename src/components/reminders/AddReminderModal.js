import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Button, Form, Modal } from 'react-bootstrap'
import DateTime from 'react-datetime'
import ColorPicker from '../ColorPicker'
import moment from 'moment'
import { connect } from 'react-redux'
import { addReminder } from '../../lib/actions/reminders-actions'

/**
 * Displays a modal dialog which contains a form to create a new reminder.
 *
 * @param {*} { addReminder, dismiss }
 * @returns
 */
function AddReminderModal ({ addReminder, dismiss }) {
  const [when, setWhen] = useState(moment())
  const [message, setMessage] = useState('')
  const [color, setColor] = useState('#03a9f4')

  const handleAddReminder = e => {
    e.preventDefault()
    addReminder(when, message, color)
    dismiss()
  }

  return (
    <Modal onHide={dismiss} backdrop="static" show>
      <Modal.Header style={{ backgroundColor: color }} closeButton>
        <Modal.Title>Add Reminder</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleAddReminder}>
        <Modal.Body>
          <Form.Group>
            <Form.Label>When?</Form.Label>
            <DateTime value={when} onChange={setWhen} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Message</Form.Label>
            <Form.Control
              value={message}
              maxLength={30}
              onChange={e => setMessage(e.target.value)}
              placeholder="Remember to ..."
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Priority</Form.Label>
            <ColorPicker color={color} onChange={setColor} />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={dismiss}>Cancel</Button>
          <Button type="submit" variant="primary">
          Add
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

AddReminderModal.propTypes = {
  addReminder: PropTypes.func.isRequired,
  dismiss: PropTypes.func.isRequired
}

function mapDispatchToProps (dispatch) {
  return {
    addReminder (when, message, color) {
      return dispatch(addReminder(when, message, color))
    }
  }
}

export default connect(null, mapDispatchToProps)(AddReminderModal)
