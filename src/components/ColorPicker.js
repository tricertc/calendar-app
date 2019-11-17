import React from 'react'
import PropTypes from 'prop-types'
import { CirclePicker } from 'react-color'

const colorOptions = [
  '#03a9f4', '#8bc34a', '#cddc39',
  '#ffeb3b', '#ff9800', '#ff5722'
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
    <CirclePicker colors={colorOptions} color={color} onChange={handleChange} />
  )
}

ColorPicker.defaultProps = {
  color: colorOptions[0]
}

ColorPicker.propTypes = {
  color: PropTypes.string,
  onChange: PropTypes.func.isRequired
}
