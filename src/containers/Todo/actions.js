const addTodo = (text, filters) => ({
  type: 'ADD_TODO',
  text,
  filters
});

const completeTodo = id => ({
  type: 'COMPLETE_TODO',
  id
});

const deleteTodo = id => ({
  type: 'DELETE_TODO',
  id
})

const applyFilters = filters => ({
  type: 'APPLY_FILTERS',
  filters
});

export {
  addTodo,
  completeTodo,
  deleteTodo,
  applyFilters
};
