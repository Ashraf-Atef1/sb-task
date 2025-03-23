import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@/components/ui/pagination";

export function PaginationSection() {
	return (
		<Pagination className="mt-2">
			<PaginationContent>
				<PaginationItem>
					<PaginationNext href="#" />
				</PaginationItem>
				<div className="flex flex-row-reverse gap-1">
					{Array.from({ length: 5 }).map((_, index) => (
						<PaginationItem key={index}>
							<PaginationLink href="#" isActive={!index}>
								{index + 1}
							</PaginationLink>
						</PaginationItem>
					))}{" "}
					<PaginationItem>
						<PaginationEllipsis />
					</PaginationItem>
				</div>

				<PaginationItem>
					<PaginationPrevious href="#" />
				</PaginationItem>
			</PaginationContent>
		</Pagination>
	);
}
