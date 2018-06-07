import React from 'react'
import { connect } from 'react-redux'
import Todo from './Todo/Todo'
import TodoList from './TodoList/TodoList'
import List from '../components/List'
import Filters from '../components/Filters'
import Wrapper from '../components/Wrapper'
import Header from '../components/Header'

const App = ({
  todos
}) => (
  <Wrapper>
    <Header />
    <Todo />
    {!!todos.length && <Filters.OrderByDate />}
    <TodoList />
    {!!todos.length &&<Filters.ShowByStatus />}
  </Wrapper>
)

const mapStateToProps = state => state;

export default connect(mapStateToProps)(App)
