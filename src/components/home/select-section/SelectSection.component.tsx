"use client";
import AddCircleIcon from "@/components/shared/icons/AddCircle.icon";
import { Button } from "@/components/ui/button";
import { Combobox } from "@/components/ui/combobox";
import Popup from "./popup/Popup.component";
import { useState } from "react";
import { IFormData } from "./select-section.types";

export default function SelectSection() {
	const [isHidden, setIsHidden] = useState(true);
	const [formData, setFormData] = useState<IFormData>({
		date: "",
		employee: "",
		totalSalary: "",
		netSalary: "",
		increases: "",
		allowances: "",
	});

	return (
		<div className="flex justify-between items-center flex-wrap gap-2">
			<div className="flex gap-4 flex-wrap grow">
				<Combobox
					label="الموظف"
					options={[
						{ label: "محمد علي", value: "mohamed ali" },
						{ label: "محمد علي", value: "mohamed" },
						{ label: "محمد علي", value: "mohame" },
						{ label: "محمد علي", value: "moha" },
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
			</div>
			<Button className="font-bold" onClick={() => setIsHidden(false)}>
				<AddCircleIcon color="white" />
				اضافة راتب
			</Button>
			<Popup
				isHidden={isHidden}
				setIsHidden={setIsHidden}
				formData={formData}
				setFormData={setFormData}
			/>
		</div>
	);
}
