import {IconProps} from "@/utils/helpers";

export default function TelegramLogoIcon({style, className, size, color, strokeSize, strokeColor}: IconProps) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 512 512"
			className={className}
			style={{
				width: size,
				height: size,
				fill: color,
				strokeWidth: strokeSize,
				stroke: strokeColor,
				...style
			}}
		>
			<path
				d="m512 50.49-80.98 408.28s-11.32 28.31-42.47 14.72L200.84 329.82c25.23-22.68 220.96-198.65 229.52-206.63 13.23-12.35 5.02-19.7-10.36-10.36l-289.11 183.6-111.54-37.55S1.79 252.65.1 239.06c-1.7-13.59 19.82-20.95 19.82-20.95L474.63 39.73S512 23.31 512 50.49z"
			/>
		</svg>
	);
}