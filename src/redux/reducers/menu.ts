import { createSlice } from "@reduxjs/toolkit"


interface MenuState {
    menuActive: boolean
}

const initialState: MenuState = {
    menuActive: false
}

const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        isActive: (state) => {
            state.menuActive = !state.menuActive
        },
    }
})

export const { isActive } = menuSlice.actions

export default menuSlice.reducer

