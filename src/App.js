import React from 'react'
import { Container } from 'react-bootstrap'
import Calendar from './components/Calendar'
import AddReminderButton from './components/reminders/AddReminderButton'
import './App.scss'

function App () {
  return (
    <Container>
      <Calendar />
      <AddReminderButton />
    </Container>
  )
}

export default App
