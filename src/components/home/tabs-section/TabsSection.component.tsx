import PrinterIcon from "@/components/shared/icons/Printer.icon";
import { Button } from "@/components/ui/button";

export default function TabsSection() {
	return (
		<div className="w-full flex items-end justify-between">
			<Button className="">
				<PrinterIcon color="white" />
				طباعة
			</Button>
			<div>
				<button className="border py-1 px-4 cursor-pointer">خصم واضافة</button>
				<button className="bg-white py-1 px-4 border cursor-pointer">
					مرتبات
				</button>
			</div>
		</div>
	);
}
