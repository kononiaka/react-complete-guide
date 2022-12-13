import { createSlice } from '@reduxjs/toolkit';

const inititalCartState = { isShown: false, notification: null };

const toggleCartSlice = createSlice({
    name: "ui",
    initialState: inititalCartState,
    reducers: {
        toggleCart(state) {
            state.isShown = !state.isShown;
        },
        showNotification(state, action) {
            state.notification = { status: action.payload.status, title: action.payload.title, message: action.payload.message };
        }
    }
});

export const uiActions = toggleCartSlice.actions;

export default toggleCartSlice;