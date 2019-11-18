import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import configureStore from 'redux-mock-store'
import Notifications from '../Notifications'

Enzyme.configure({ adapter: new Adapter() })

describe('Notifications component', () => {
  let store

  beforeEach(() => {
    store = configureStore()({
      notifications: [
        { id: 1, message: 'notification', type: 'success' },
        { id: 2, message: 'notification', type: 'success' },
        { id: 3, message: 'notification', type: 'success' }
      ]
    })
  })

  it('should render notifications', () => {
    const wrapper = mount(<Notifications store={store} />)
    expect(wrapper.find('Toast').length).toEqual(3)
  })
})
