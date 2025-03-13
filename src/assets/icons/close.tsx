import type { ISvgArrowLeft } from "./interface";

const SvgClose = ({
	title = "iconCloseTitle",
	desc,
	fill = '#d31450',
	...props
}: ISvgArrowLeft) => {
	return (
		<>
			<svg
				width='15'
				height='15'
				viewBox="0 0 24 24"
				fill={fill}
				xmlns="http://www.w3.org/2000/svg"
				aria-labelledby={`${title ? "iconCloseTitle" : ""} ${
					desc ? "iconClockDesc" : ""
				}`}
				{...props}
			>
				<title id="iconCloseTitle">{title}</title>
				{desc && <desc id="iconCloseDesc">{desc}</desc>}
				<path
					d="M18 6L6 18"
					stroke={fill}
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M6 6L18 18"
					stroke={fill}
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		</>
	);
};

export default SvgClose;
