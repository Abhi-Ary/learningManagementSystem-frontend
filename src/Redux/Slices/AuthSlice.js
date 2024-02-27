import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn: localStorage.getItem('isLoggedIn') || false,
    // role: localStorage.setItem('role') || "",
    // data: localStorage.setItem('data') || {}
};

const autiSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {}
});

export const {} = autiSlice.actions;
export default autiSlice.reducer;