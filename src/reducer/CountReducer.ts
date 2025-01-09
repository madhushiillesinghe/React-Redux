import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: { count: 0, display: true },
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        toggleDisplay: (state) => {
            state.display = !state.display;
        },
    },
});

export const { increment, decrement, toggleDisplay } = counterSlice.actions;

export default counterSlice.reducer;
