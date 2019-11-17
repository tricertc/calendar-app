import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
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
      <Button variant="primary" disabled={toggled} onClick={() => setToggled(true)}>
        Add Reminder
      </Button>
      {toggled && <AddReminderModal dismiss={() => setToggled(false)} />}
    </>
  )
}
