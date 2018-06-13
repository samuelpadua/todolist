import todos from './reducer'
import _ from 'lodash'
import { filtes, filters } from '../../constants'

const created_at = new Date()
const updated_at = new Date()
const uuid = ['b0f95eb4', 'f7a1f9d9']
const mockTodos = [
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

const generateMock = () => ([
  {
    id: 'b0f95eb4',
    text: 'Todo Test 1',
    completed: false,
    visible: true,
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    id: 'f7a1f9d9',
    text: 'Todo Test 2',
    completed: false,
    visible: true,
    created_at: new Date(),
    updated_at: new Date()
  }
])

const updateState = (state, mock) => {
  return state.map((task, i) => {
    task.id = mock[i].id;
    task.created_at = mock[i].created_at;
    task.updated_at = mock[i].updated_at;
    return task;
  })
}

describe('todos reducer', () => {
  it('should start initial state', () => {
    expect(
      todos(undefined, {})
    ).toEqual([])
  })

  it('should add new todo ADD_TODO', () => {
    let mock = generateMock();
    let state = todos([], {
      type: 'ADD_TODO',
      text: 'Todo Test 1'
    })
    state = updateState(state, mock);

    expect(state).toEqual([mock[0]])

    state = todos([mock[0]], {
      type: 'ADD_TODO',
      text: 'Todo Test 2'
    })
    state = updateState(state, mock);

    expect(state).toEqual(mock)
  })

  it('should handle TOGGLE_TODO', () => {
    const mock = generateMock();
    mock[0].completed = true;

    let state = todos(mockTodos, {
      type: 'COMPLETE_TODO',
      id: uuid[0]
    })
    state = updateState(state, mock);    

    expect(state).toEqual(mock)
  })

  it('should handle DELETE_TODO', () => {
    const mock = _.cloneDeep(mockTodos);
    let state = todos(mockTodos, {
      type: 'DELETE_TODO',
      id: uuid[0]
    })

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

    state = updateState(state, mock);
    expect(state).toEqual(mock)
  })

  it('should handle APPLY_FILTERS only CONCLUDED tasks', () => {
    let mock = _.cloneDeep(mockTodos);
    
    mock[0].completed = true
    let state = todos(mock, {
      type: 'APPLY_FILTERS',
      filters: {
        orderBy: filters.MOST_RECENT,
        showByStatus: filters.SHOW_COMPLETED
      }
    })

    state = updateState(state, mock);
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
