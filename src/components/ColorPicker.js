import React from 'react'
import PropTypes from 'prop-types'
import { CirclePicker } from 'react-color'

const options = [
  '#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3',
  '#03a9f4', '#00bcd4', '#009688', '#4caf50', '#8bc34a', '#cddc39',
  '#ffeb3b', '#ffc107', '#ff9800', '#ff5722', '#795548', '#607d8b'
]

/**
 * Renders a color picker.
 *
 * @export
 * @param {*} { color, onChange }
 * @returns
 */
export default function ColorPicker ({ color, onChange }) {
  const handleChange = color => onChange(color.hex)
  return (
    <CirclePicker colors={options} color={color} onChange={handleChange} />
  )
}

ColorPicker.defaultProps = {
  color: options[0]
}

ColorPicker.propTypes = {
  color: PropTypes.string,
  onChange: PropTypes.func.isRequired
}
