import { IIconProps } from "./icon.types";

export default function PrinterIcon({
	className = "",
	color = "var(--neutral-bold)",
	size = 24,
}: IIconProps) {
	return (
		<svg
			width={size}
			height={size}
			className={className}
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g clipPath="url(#clip0_2520_5732)">
				<path
					d="M5.00008 7.50001V1.66667H15.0001V7.50001M5.00008 15H3.33341C2.89139 15 2.46746 14.8244 2.1549 14.5119C1.84234 14.1993 1.66675 13.7754 1.66675 13.3333V9.16667C1.66675 8.72464 1.84234 8.30072 2.1549 7.98816C2.46746 7.6756 2.89139 7.50001 3.33341 7.50001H16.6667C17.1088 7.50001 17.5327 7.6756 17.8453 7.98816C18.1578 8.30072 18.3334 8.72464 18.3334 9.16667V13.3333C18.3334 13.7754 18.1578 14.1993 17.8453 14.5119C17.5327 14.8244 17.1088 15 16.6667 15H15.0001M5.00008 11.6667H15.0001V18.3333H5.00008V11.6667Z"
					stroke={color}
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</g>
			<defs>
				<clipPath id="clip0_2520_5732">
					<rect width="20" height="20" fill={color} />
				</clipPath>
			</defs>
		</svg>
	);
}
