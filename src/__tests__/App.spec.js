import React from 'react'
import ReactDOM from 'react-dom'
import App from '../App'

import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

describe('App.js', () => {
  const mockStore = configureStore()
  let store

  beforeEach(() => {
    store = mockStore({
      ui: {
        year: 2019,
        month: 10
      },
      reminders: []
    })
  })

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      div
    )
  })
})
