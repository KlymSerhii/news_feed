import { createSlice } from "@reduxjs/toolkit";

const USER_CREDENTIALS = {
    username: "admin",
    password: "admin"
};

export const userSlice = createSlice({
    name: "user",
    initialState: {
        isLoggedIn: false,
        error: null
    },
    reducers: {
        logIn: (state, action) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Inner library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            const {payload: {username, password}} = action;
            if (username === USER_CREDENTIALS.username && password === USER_CREDENTIALS.password) {
                state.isLoggedIn = true;
                state.error = null;
            } else {
                state.error = "Wrong username or password";
            }

        },
        clearError: (state) => {
            state.error = null;
        },
        logOut: (state) => {
            state.isLoggedIn = false;
            state.error = null;
        }
    },
});

export const { logIn, clearError, logOut } = userSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they"re used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectUserStatus = state => state.user.isLoggedIn;
export const selectUserError = state => state.user.error;

export default userSlice.reducer;
