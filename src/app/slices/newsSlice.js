import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import axios from "axios"

export const newsSlice = createSlice({
    name: "news",
    initialState: {
        items: [],
        isLoaded: false
    },
    reducers: {
        loadNews: (state, action) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Inner library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.items = action.payload;
            state.isLoaded = true;
        },
        deleteNews: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
        addNews: (state, action) => {
            state.items = [...state.items, {id: uuidv4(), ...action.payload}];
        }
    },
});

export const { loadNews, deleteNews, addNews } = newsSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const loadNewsAsync = () => async dispatch => {
    try {
        const {data} = await axios.get("db.json");
        dispatch(loadNews(data));
    } catch (error) {
        console.log("Something went wrong. Error: ", error)
    }
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they"re used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectNews = state => state.news.items;
export const selectIsNewsLoaded = state => state.news.isLoaded;

export default newsSlice.reducer;
