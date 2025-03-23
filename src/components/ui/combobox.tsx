"use client";

import * as React from "react";
import { Check, ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "@/components/ui/command";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";

export interface ComboboxProps {
	options: Array<{ value: string; label: string }>;
	onSelect?: (value: string) => void;
	intialValue?: string;
	label?: string;
}
export function Combobox({
	options,
	onSelect,
	intialValue,
	label,
}: ComboboxProps) {
	const [open, setOpen] = React.useState(false);
	const [value, setValue] = React.useState(intialValue || "");
	const [searchQuery, setSearchQuery] = React.useState("");

	const filteredOptions = options.filter((option) =>
		option.label.toLowerCase().includes(searchQuery.toLowerCase())
	);
	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<div>
					<label className="flex flex-col gap-2 max-w-[200px] min-w-[150px] h-20">
						{label}
						<Button
							variant="outline"
							role="combobox"
							aria-expanded={open}
							className="max-w-[200px] h-9 justify-between bg-white"
							title="combobox trigger"
						>
							{value
								? options.find((option) => option.value === value)?.label
								: "أختر..."}
							<ChevronDown className="opacity-50" />
						</Button>
					</label>
				</div>
			</PopoverTrigger>
			<PopoverContent className="w-[200px] p-0">
				<Command shouldFilter={false}>
					<CommandInput
						placeholder="Search..."
						onValueChange={setSearchQuery}
						className="h-9"
					/>
					<CommandList>
						<CommandEmpty>No options found.</CommandEmpty>
						<CommandGroup>
							{filteredOptions.map((option) => (
								<CommandItem
									key={option.value}
									value={option.value}
									onSelect={(currentValue) => {
										setValue(currentValue);
										setOpen(false);
										onSelect?.(currentValue);
									}}
								>
									{option.label}
									<Check
										className={cn(
											"ml-auto",
											value === option.value ? "opacity-100" : "opacity-0"
										)}
									/>
								</CommandItem>
							))}
						</CommandGroup>
					</CommandList>
				</Command>
			</PopoverContent>
		</Popover>
	);
}
