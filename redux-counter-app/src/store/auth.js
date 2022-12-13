import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
    isAuthinticated: false
};

const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        login(state) {
            state.isAuthinticated = true;
        },
        logout(state) {
            state.isAuthinticated = false;
        }
    }

});

export const authActions = authSlice.actions;

export default authSlice.reducer;