import React from 'react'
import Todo from '../containers/Todo/Todo';
import TodoList from '../containers/TodoList/TodoList';
import List from './List';
import Filters from './Filters';
import OrderByDate from './Filters/OrderByDate';

const App = () => (
  <div>
    <Todo />
    <OrderByDate />
    <TodoList />
    <Filters.ShowByStatus />
  </div>
)

export default App
