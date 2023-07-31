import { configureStore, createSlice } from '@reduxjs/toolkit'
import {IEpisode, IShow} from './services/api/types'

const reducers = {
  searchHandlerReducer: createSlice({
    name: 'searchHandler',
    initialState: false,
    reducers: {
      setSearchHandler(state: boolean, action) { return action.payload }
    }
  }),
  searchTermReducer: createSlice({
    name: 'searchTerm',
    initialState: '',
    reducers: {
      setSearchTerm(state: String = '', action) { return action.payload }
    }
  }),
  showReducer: createSlice({
    name: 'show',
    initialState: null,
    reducers: {
      setShow(state: IShow | null, action) { 
        return Object.assign( {}, action.payload) 
      }
    }
  }),
  episodeReducer: createSlice({
    name: 'episode',
    initialState: null,
    reducers: {
      setEpisode(state: IEpisode | null, action) { return Object.assign( {}, action.payload) }
    }
  }),
}

export const actions = {
  ...reducers.searchHandlerReducer.actions,
  ...reducers.searchTermReducer.actions,
  ...reducers.showReducer.actions,
  ...reducers.episodeReducer.actions
}

export const store = configureStore(
  {
    reducer: {
      isSearchActive: reducers.searchHandlerReducer.reducer,
      searchTerm: reducers.searchTermReducer.reducer,
      show: reducers.showReducer.reducer,
      episode: reducers.episodeReducer.reducer
    }
  }
)
