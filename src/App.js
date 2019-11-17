import React from 'react'
import { Container } from 'react-bootstrap'
import Calendar from './components/Calendar'
import CalendarControls from './components/CalendarControls'
import AddReminderButton from './components/reminders/AddReminderButton'

function App () {
  return (
    <Container>
      <CalendarControls />
      <Calendar />
      <AddReminderButton />
    </Container>
  )
}

export default App
