import { createSlice } from '@reduxjs/toolkit'

const imageLinkSlice = createSlice({
    name: 'imageLinkSlice',
    initialState: {
        link: ''
    },
    reducers: {
        changelink(state, action) {

        }
    }
})

export default imageLinkSlice.reducer