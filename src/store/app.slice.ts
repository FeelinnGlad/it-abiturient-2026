import {createSlice} from "@reduxjs/toolkit";

interface InitialState {

}

const initialState: InitialState = {

};

const appSlice = createSlice({
	name: "app",
	initialState,
	reducers: {

	}
});

export const AppSliceActions = appSlice.actions;
export const AppSliceReducer = appSlice.reducer;