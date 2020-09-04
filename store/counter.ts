import { createSlice } from "@reduxjs/toolkit";

type ICounter = {
	counter: number
}

const initialState: ICounter = {
	counter: 0
};

const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		increment: (state, action) => ({ counter: state.counter + action.payload }),
		decrement: (state, action) => ({ counter: state.counter - action.payload })
	}
})

export const counterReducer = counterSlice.reducer;
export const { increment, decrement } = counterSlice.actions;

