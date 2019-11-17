import React from 'react'
import { Container } from 'react-bootstrap'
import Calendar from './components/Calendar'
import './App.scss'

function App () {
  return (
    <Container className="pt-2">
      <Calendar />
    </Container>
  )
}

export default App
