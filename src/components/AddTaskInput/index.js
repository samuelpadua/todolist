import React from 'react';
import PropTypes from 'prop-types';


const AddTaskInput = ({
  handleInput
}) => {
  return (
    <input type="text" onKeyUp={handleInput} placeholder="Adicionar a lista" />
  );
};

AddTaskInput.propTypes = {
  handleInput: PropTypes.func
};

export default AddTaskInput;
