import { configureStore, createSlice } from "@reduxjs/toolkit";

// Create a slice
const sliceName = createSlice({
    name: "sliceName",
    initialState: { value: 0 },
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        }
    },
});

// Export actions
export const { increment, decrement } = sliceName.actions;

// Configure store
const store = configureStore({
    reducer: {
        slice: sliceName.reducer, 
    }
});

// Export store
export default store;
