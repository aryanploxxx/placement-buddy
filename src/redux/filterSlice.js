import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  filters: {
    company: '',
    jobRole: '',
    cgpa: '',
    ctc: '',
    duration: ''
  }
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      const { field, value } = action.payload
      state.filters[field] = value
    },
    clearFilters: (state) => {
      state.filters = initialState.filters
    }
  }
})

export const { setFilter, clearFilters } = filterSlice.actions
export default filterSlice.reducer 