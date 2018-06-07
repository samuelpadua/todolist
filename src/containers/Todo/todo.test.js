import todos from './reducer'
import moment from 'moment'
import _ from 'lodash'
import { filtes, filters } from '../../constants'

const created_at = moment().format()
const updated_at = moment().format()
const uuid = ['b0f95eb4', 'f7a1f9d9']
const mockTodos =[
  {
    id: 'b0f95eb4',
    text: 'Todo Test 1',
    completed: false,
    visible: true,
    created_at,
    updated_at
  },
  {
    id: 'f7a1f9d9',
    text: 'Todo Test 2',
    completed: false,
    visible: true,
    created_at,
    updated_at
  }
]

describe('todos reducer', () => {
  it('should start initial state', () => {
    expect(
      todos(undefined, {})
    ).toEqual([])
  })

  it('should add new todo ADD_TODO', () => {
    let state = todos([], {
      type: 'ADD_TODO',
      text: 'Todo Test 1'
    })
    state[0].id = uuid[0]
    expect(state).toEqual([mockTodos[0]])
  

    state = todos([mockTodos[0]], {
      type: 'ADD_TODO',
      text: 'Todo Test 2'
    })
    state[1].id = uuid[1]
    expect(state).toEqual(mockTodos)
  })

  it('should handle TOGGLE_TODO', () => {
    const mock = _.cloneDeep(mockTodos);
    mock[0].completed = true;

    const state = todos(mockTodos, {
      type: 'COMPLETE_TODO',
      id: uuid[0]
    })

    expect(state).toEqual(mock.reverse())
  })

  it('should handle DELETE_TODO', () => {
    const mock = _.cloneDeep(mockTodos);
    const state = todos(mockTodos, {
      type: 'DELETE_TODO',
      id: uuid[0]
    })

    state[0].id = uuid[1]
    expect(state).toEqual([mock[1]])
  })

  it('should handle APPLY_FILTERS with ALL', () => {
    let mock = _.cloneDeep(mockTodos);
    let state = todos(mockTodos, {
      type: 'APPLY_FILTERS',
      filters: {
        orderBy: filters.MOST_OLDER,
        showByStatus: filters.SHOW_ALL
      }
    })

    mock.forEach((m, i) => {
      m.created_at = state[i].created_at
      m.updated_at = state[i].updated_at
    })
    expect(state).toEqual(mock.reverse())
  })

  it('should handle APPLY_FILTERS only CONCLUDED tasks', () => {
    let mock = _.cloneDeep(mockTodos);
    
    mock[0].completed = true
    const state = todos(mock, {
      type: 'APPLY_FILTERS',
      filters: {
        orderBy: filters.MOST_RECENT,
        showByStatus: filters.SHOW_COMPLETED
      }
    })

    mock.reverse().forEach((m, i) => {
      m.created_at = state[i].created_at
      m.updated_at = state[i].updated_at
    })
    expect(state).toEqual(mock)
  })

  it('should handle APPLY_FILTERS without filters', () => {
    let mock = _.cloneDeep(mockTodos);
    expect(todos(mock, {
      type: 'APPLY_FILTERS',
      filters: {
        orderBy: '',
        showByStatus: ''
      }
    })).toEqual(mock)
  })
})
