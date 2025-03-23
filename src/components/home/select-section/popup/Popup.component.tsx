import IconButton from "@/components/shared/icon-button/IconButton.component";
import { Button } from "@/components/ui/button";
import { Combobox } from "@/components/ui/combobox";
import { X } from "lucide-react";
import PopupInput from "./popup-input/PopupInput.component";
import { IFormData } from "../select-section.types";
import { useAppDispatch } from "@/lib/store/hooks";
import { addRow } from "@/lib/store/rows/rows.slice";

export default function Popup({
	isHidden,
	setIsHidden,
	setFormData,
	formData,
}: {
	isHidden: boolean;
	setIsHidden: (isHidden: boolean) => void;
	setFormData: (formData: IFormData) => void;
	formData: IFormData;
}) {
	const dipatch = useAppDispatch();
	const handelInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};
	const handelSubmit = () => {
		dipatch(addRow(formData));
		setIsHidden(true);
		setFormData({
			date: "",
			employee: "",
			totalSalary: "",
			netSalary: "",
			increases: "",
			allowances: "",
		});
	};
	return (
		<div
			className="fixed z-20 top-1/2 left-1/2 -translate-1/2 bg-white p-4 rounded-xl shadow"
			style={{ display: isHidden ? "none" : "block" }}
		>
			<form
				className="relative w-full h-full flex flex-col gap-4"
				onSubmit={(e) => e.preventDefault()}
			>
				<div className="absolute top-0 left-0">
					<IconButton onClick={() => setIsHidden(true)}>
						<X />
					</IconButton>
				</div>
				<h3 className="font-bold text-xl text-center">رواتب موظفين</h3>
				<div className="grid md:grid-cols-2 xl:grid-cols-3 gap-3 items-center">
					<Combobox
						label="الموظف"
						options={[
							{ label: "محمد علي", value: "محمد علي" },
							{ label: "محمد احمد", value: "محمد احمد" },
							{ label: "اسماعيل علي", value: "اسماعيل علي" },
							{ label: "متولي علي", value: "متولي علي" },
						]}
						onSelect={(value) => setFormData({ ...formData, employee: value })}
					/>
					<Combobox
						label="التاريخ"
						options={[
							{ label: "اغسطس 2025", value: "aug 2025" },
							{ label: "يوليو 2025", value: "jul 2025" },
							{ label: "يونيو 2025", value: "jun 2025" },
							{ label: "مايو 2025", value: "may 2025" },
						]}
						onSelect={(value) => setFormData({ ...formData, date: value })}
					/>
					<PopupInput
						name="netSalary"
						label="صافي المرتب"
						onChage={handelInputChange}
						value={formData.netSalary}
					/>
					<PopupInput
						name="increases"
						label="زيادات"
						onChage={handelInputChange}
						value={formData.increases}
					/>
					<PopupInput
						name="allowances"
						label="بدالات"
						onChage={handelInputChange}
						value={formData.allowances}
					/>
					<PopupInput
						name="totalSalary"
						label="اجمال المرتب"
						onChage={handelInputChange}
						value={formData.totalSalary}
					/>
				</div>
				<Button onClick={handelSubmit} className="self-end px-8">
					حفظ
				</Button>
			</form>
		</div>
	);
}
