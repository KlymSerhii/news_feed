import {configureStore} from "@reduxjs/toolkit";
import newsReducer from "./slices/newsSlice";
import userReducer from "./slices/userSlice";

export default configureStore({
    reducer: {
        news: newsReducer,
        user: userReducer,
    },
});
