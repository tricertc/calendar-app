import React, { useEffect, useState } from 'react'
import { Button, Modal, Form } from 'react-bootstrap'
import PropTypes from 'prop-types'
import DateTime from 'react-datetime'
import _ from 'lodash'
import { connect } from 'react-redux'
import ColorPicker from '../ColorPicker'
import { clearSelectedReminder } from '../../lib/actions/ui-actions'
import { deleteReminder, updateReminder } from '../../lib/actions/reminders-actions'

/**
 * Renders a modal to view and modify a reminder.
 *
 * @param {*} { reminder }
 * @returns
 */
function EditReminderModal ({ reminder, dismiss, deleteReminder, update }) {
  const [when, setWhen] = useState('')
  const [message, setMessage] = useState('')
  const [color, setColor] = useState('')

  useEffect(() => {
    if (reminder) {
      setWhen(reminder.when)
      setMessage(reminder.message)
      setColor(reminder.color)
    }
  }, [reminder])

  const handleSubmit = e => {
    e.preventDefault()
    update(reminder.id, when, message, color)
    dismiss()
  }

  if (!reminder) return null

  return (
    <Modal onHide={dismiss} show>
      <Modal.Header style={{ backgroundColor: color }} closeButton>
        <Modal.Title>Manage Reminder</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
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
              placeholder="Remember to ..."
              onChange={e => setMessage(e.target.value)}
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
          <Button
            variant="danger"
            onClick={() => {
              window.confirm('Are you sure?') && deleteReminder(reminder.id)
            }}
          >
              Delete
          </Button>
          <Button type="submit" variant="primary">Update</Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

// TODO: not DRY - refactor shape into separate file
EditReminderModal.propTypes = {
  reminder: PropTypes.shape({
    id: PropTypes.string.isRequired,
    when: PropTypes.object.isRequired,
    message: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
  }),
  dismiss: PropTypes.func.isRequired,
  update: PropTypes.func.isRequired,
  deleteReminder: PropTypes.func.isRequired
}

/**
 * Map the selected reminder.
 *
 * @param {*} state
 * @returns
 */
function mapStateToProps (state) {
  return {
    reminder: _.find(state.reminders, x => x.id === state.ui.selectedReminder)
  }
}

/**
 * Map dispatchable actions to manage reminders.
 *
 * @param {*} dispatch
 * @returns
 */
function mapDispatchToProps (dispatch) {
  return {
    /**
     * Delete a reminder
     *
     * @param {string} id
     */
    deleteReminder (id) {
      dispatch(deleteReminder(id))
    },

    /**
     * Dismiss the edit reminder modal dialog
     *
     */
    dismiss () {
      dispatch(clearSelectedReminder())
    },

    /**
     * Update the reminder in application state
     *
     * @param {string} id
     * @param {Date} when
     * @param {string} message
     * @param {string} color
     */
    update (id, when, message, color) {
      dispatch(updateReminder(id, { when, message, color }))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditReminderModal)
