import { combineReducers } from "@reduxjs/toolkit";
import RowsReducer from "./rows/rows.slice";

export const rootReducer = combineReducers({
	rows: RowsReducer,
});
