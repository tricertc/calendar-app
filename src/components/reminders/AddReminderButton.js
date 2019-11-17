import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import AddReminderModal from './AddReminderModal'

/**
 * A button to toggle the "add reminder" modal dialog.
 *
 * @export
 * @returns
 */
export default function AddReminderButton () {
  const [toggled, setToggled] = useState(false)

  return (
    <>
      <Button variant="default" disabled={toggled} onClick={() => setToggled(true)}>
        <FontAwesomeIcon icon={faPlus} style={{ marginRight: 10 }} />
        Add Reminder
      </Button>
      {toggled && <AddReminderModal dismiss={() => setToggled(false)} />}
    </>
  )
}
