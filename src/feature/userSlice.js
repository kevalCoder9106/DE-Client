import { createSlice } from "@reduxjs/toolkit";
import { current } from '@reduxjs/toolkit'

const initialValues = {
    username: 'keval',
    email: 'keval',
    age: '',
    weight: '',
    height: '',
    metabolism: ''
}

const userSlice = createSlice({
    name: 'userSlice',
    initialState: initialValues,
    reducers: {
        sample: (state) => {
            console.log(current(state))
        }
    }
})

export const { sample } = userSlice.actions
export default userSlice.reducer