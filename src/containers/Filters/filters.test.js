import filter, { initialState } from './reducer'
import { filters } from '../../constants'

describe('filter reducer', () => {
  it('should start initial state', () => {
    expect(
      filter(undefined, {})
    ).toEqual(initialState)
  })

  it('should handle UPDATE_FILTER', () => {
    expect(
      filter(initialState, {
        type: 'UPDATE_FILTERS',
        filter: 'orderBy',
        value: filters.MOST_OLDER
      })
    ).toEqual({
      orderBy: filters.MOST_OLDER,
      showByStatus: initialState.showByStatus
    })

    expect(
      filter(initialState, {
        type: 'UPDATE_FILTERS',
        filter: 'orderBy',
        value: filters.MOST_RECENT
      })
    ).toEqual({
      orderBy: filters.MOST_RECENT,
      showByStatus: initialState.showByStatus
    })

    expect(
      filter(initialState, {
        type: 'UPDATE_FILTERS',
        filter: 'showByStatus',
        value: filters.SHOW_COMPLETED
      })
    ).toEqual({
      orderBy: filters.MOST_RECENT,
      showByStatus: filters.SHOW_COMPLETED
    })
  })
})
