import { IIconProps } from "./icon.types";

export default function EyeIcon({
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
				d="M15.58 12C15.58 13.98 13.98 15.58 12 15.58C10.02 15.58 8.42001 13.98 8.42001 12C8.42001 10.02 10.02 8.41998 12 8.41998C13.98 8.41998 15.58 10.02 15.58 12Z"
				stroke={color}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M12 20.27C15.53 20.27 18.82 18.19 21.11 14.59C22.01 13.18 22.01 10.81 21.11 9.39997C18.82 5.79997 15.53 3.71997 12 3.71997C8.47 3.71997 5.18 5.79997 2.89 9.39997C1.99 10.81 1.99 13.18 2.89 14.59C5.18 18.19 8.47 20.27 12 20.27Z"
				stroke={color}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}
