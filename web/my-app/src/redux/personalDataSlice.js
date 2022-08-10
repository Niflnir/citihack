import { createSlice } from '@reduxjs/toolkit'

export const personalDataSlice = createSlice({
  name: 'personalData',
  initialState: {
    returnRate: '',
    term: '',
    risk: '',
    percentofsavings: '',
  },
  reducers: {
    updatePortfolioData: (state, action) => {
        state.returnRate = action.payload.returnRate
        state.term = action.payload.term
        state.risk = action.payload.risk
    }
  },
})

// Action creators are generated for each case reducer function
export const { updatePortfolioData } = personalDataSlice.actions

export default personalDataSlice.reducer
