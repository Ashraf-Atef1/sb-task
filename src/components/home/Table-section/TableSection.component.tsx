"use client";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { useAppSelector } from "@/lib/store/hooks";
const header = [
	"التاريخ",
	"الموظف",
	"أجمالي الراتب",
	"صافي المرتب",
	"زيادات",
	"بدالات",
];

export default function TableSection() {
	const { rows } = useAppSelector((state) => state.rows);
	return (
		<div>
			<Table className="overflow-y-scroll min-w-[50rem]">
				<TableHeader>
					<TableRow className="bg-hue grid grid-cols-6">
						{header.map((item, index) => (
							<TableHead key={index} className="text-neutral-bold text-center">
								{item}
							</TableHead>
						))}
					</TableRow>
				</TableHeader>
				<TableBody>
					{/* <Row title="Main Category" value={selectedMainCategory?.name} /> */}

					{rows.map((item, index) => (
						<TableRow
							key={index}
							className="grid grid-cols-6 text-center even:bg-hue"
						>
							<TableCell>{item.date}</TableCell>
							<TableCell>{item.employee}</TableCell>
							<TableCell>{item.totalSalary}</TableCell>
							<TableCell>{item.netSalary}</TableCell>
							<TableCell>{item.increases}</TableCell>
							<TableCell>{item.allowances}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	);
}
