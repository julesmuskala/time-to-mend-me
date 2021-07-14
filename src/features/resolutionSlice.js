import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
  resolutions: [
    {
      id: nanoid(),
      imageID: 'wildcard',
      title: 'Create your resolutions!',
      start: Date.now()
    }
  ],
}

const resolutionSlice = createSlice({
  name: 'resolution',
  initialState,
  reducers: {
    createNewResolution(state, action) {
      state.resolutions.push({
        id: nanoid(),
        imageID: action.payload.imageID,
        title: action.payload.title,
        start: action.payload.start
      })
    },
    removeResolution(state, action) {
      state.resolutions.forEach(resolution => {
        if (action.payload === resolution.id) {
          delete state.resolutions[state.resolutions.indexOf(resolution)]
        }
      })
    }
  }
})

export const {
  createNewResolution,
  removeResolution
} = resolutionSlice.actions

export default resolutionSlice.reducer