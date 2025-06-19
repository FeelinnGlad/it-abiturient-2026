import {IconProps} from "@/utils/helpers";

export default function MenuIcon({style, className, size, color, strokeSize, strokeColor}: IconProps) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0,0,256,256"
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
			<g transform="scale(5.12,5.12)">
				<path d="M0,9v2h50v-2zM0,24v2h50v-2zM0,39v2h50v-2z"></path>
			</g>
		</svg>
	);
}