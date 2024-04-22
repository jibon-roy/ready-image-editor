import { createSlice } from '@reduxjs/toolkit'

const imageLinkSlice = createSlice({
    name: 'imageLinkSlice',
    initialState: {
        link: ''
    },
    reducers: {
        ChangelinkToLink(state, action) {
            state.link = action.payload
        }
    }
})

export default imageLinkSlice.reducer

export const { ChangelinkToLink } = imageLinkSlice.actions