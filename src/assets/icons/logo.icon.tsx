import {IconProps} from "@/utils/helpers";

export default function LogoIcon({style, className, size, color, strokeSize, strokeColor}: IconProps) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 16 16"
			className={className}
			style={{
				width: size,
				height: size,
				fill: color || "var(--color-primary)",
				strokeWidth: strokeSize,
				stroke: strokeColor,
				...style
			}}
		>
			<path d="M 6.804688 5.117188 L 8 0.277344 L 9.195312 5.117188 L 13.460938 2.539062 L 10.882812 6.804688 L 15.722656 8 L 10.882812 9.195312 L 13.460938 13.460938 L 9.195312 10.882812 L 8 15.722656 L 6.804688 10.882812 L 2.539062 13.460938 L 5.117188 9.195312 L 0.277344 8 L 5.117188 6.804688 L 2.539062 2.539062 Z M 6.804688 5.117188 "/>
		</svg>
	);
}