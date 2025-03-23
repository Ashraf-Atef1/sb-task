import { createSlice } from "@reduxjs/toolkit";
import { IInitialState } from "./rows.model";

const initialState: IInitialState = {
	rows: [
		{
			date: "12/12/2021",
			employee: "محمد علي",
			totalSalary: "5000",
			netSalary: "4000",
			increases: "1000",
			allowances: "1000",
		},
		{
			date: "12/12/2021",
			employee: "محمد علي",
			totalSalary: "5000",
			netSalary: "4000",
			increases: "1000",
			allowances: "1000",
		},
	],
};

const rowsSlice = createSlice({
	name: "rows",
	initialState,
	reducers: {
		addRow(state, action) {
			state.rows.push(action.payload);
		},
		reset() {
			return initialState;
		},
	},
});

export const { reset, addRow } = rowsSlice.actions;
export default rowsSlice.reducer;
