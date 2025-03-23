export interface IRowData {
	date: string;
	employee: string;
	totalSalary: string;
	netSalary: string;
	increases: string;
	allowances: string;
}

export interface IInitialState {
	rows: IRowData[];
}
