import { PaginationSection } from "./Pagination-section/PaginationSection.component";
import SelectSection from "./select-section/SelectSection.component";
import TableSection from "./Table-section/TableSection.component";
import TabsSection from "./tabs-section/TabsSection.component";

export default function HomePage() {
	return (
		<section className="flex flex-col gap-8">
			<h1 className="text-xl font-bold">سجل الحركات</h1>
			<main className="w-full">
				<TabsSection />
				<div className="flex flex-col gap-6 border-2 p-5">
					<SelectSection />
					<TableSection />
				</div>
				<PaginationSection />
			</main>
		</section>
	);
}
