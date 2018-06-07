import React from 'react'
import PropTypes from 'prop-types'


const AddTaskInput = ({
  handleInput
}) => (
  <input className="AddTaskInput"
    type="text"
    onKeyUp={handleInput}
    placeholder="Adicionar a lista"
  />
)

AddTaskInput.propTypes = {
  handleInput: PropTypes.func.isRequired
}

export default AddTaskInput
