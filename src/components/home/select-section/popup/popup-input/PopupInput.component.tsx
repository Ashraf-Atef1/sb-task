import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function PopupInput({
	label,
	name,
	onChage,
	value,
}: {
	label: string;
	name: string;
	onChage: (e: React.ChangeEvent<HTMLInputElement>) => void;
	value?: string;
}) {
	return (
		<Label className="max-w-[200px] min-w-[150px] flex flex-col gap-2">
			<span className="self-start">{label}</span>
			<Input
				name={name}
				type="number"
				placeholder="اجمال المرتب"
				className="w-full border border-gray-300 rounded-md p-2"
				onChange={onChage}
				value={value}
			/>
		</Label>
	);
}
