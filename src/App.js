import React from 'react'
import { Container } from 'react-bootstrap'
import Calendar from './components/Calendar'
import Notifications from './components/Notifications'
import './App.scss'

function App () {
  return (
    <>
      <Notifications />
      <Container className="pt-2">
        <Calendar />
      </Container>
    </>
  )
}

export default App
