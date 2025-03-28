import { IIconProps } from "./icon.types";

export default function GlobalIcon({
	className = "",
	color = "var(--neutral-bold)",
	size = 24,
}: IIconProps) {
	return (
		<svg
			width={size}
			height={size}
			className={className}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
				stroke={color}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M8 3H9C7.05 8.84 7.05 15.16 9 21H8"
				stroke={color}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M15 3C16.95 8.84 16.95 15.16 15 21"
				stroke={color}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M3 16V15C8.84 16.95 15.16 16.95 21 15V16"
				stroke={color}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M3 8.99998C8.84 7.04998 15.16 7.04998 21 8.99998"
				stroke={color}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}
