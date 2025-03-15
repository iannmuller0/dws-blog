import type { ISvgArrowLeft } from "./interface";

const SvgFilter = ({
    title = "iconFilterTitle",
    desc,
    fill = "#000000",
    ...props
}: ISvgArrowLeft) => {
    return (
        <>
            <svg
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
                fill={fill}
                width="16px"
		        height="16px"
                {...props}
            >
                <title id="iconFilterTitle">{title}</title>
                {desc && <desc id="iconFilterDesc">{desc}</desc>}
                <g id="SVGRepo_bgCarrier" stroke-width="0" />
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />
                <g id="SVGRepo_iconCarrier"> <title>filter-horizontal</title> <g id="Layer_2" data-name="Layer 2">
                    <g id="invisible_box" data-name="invisible box">
                        <rect width="48" height="48" fill="none" />
                    </g>
                    <g id="icons_Q2" data-name="icons Q2">
                        <path d="M41.8,8H21.7A6.2,6.2,0,0,0,16,4a6,6,0,0,0-5.6,4H6.2A2.1,2.1,0,0,0,4,10a2.1,2.1,0,0,0,2.2,2h4.2A6,6,0,0,0,16,16a6.2,6.2,0,0,0,5.7-4H41.8A2.1,2.1,0,0,0,44,10,2.1,2.1,0,0,0,41.8,8ZM16,12a2,2,0,1,1,2-2A2,2,0,0,1,16,12Z" />
                        <path d="M41.8,22H37.7A6.2,6.2,0,0,0,32,18a6,6,0,0,0-5.6,4H6.2a2,2,0,1,0,0,4H26.4A6,6,0,0,0,32,30a6.2,6.2,0,0,0,5.7-4h4.1a2,2,0,1,0,0-4ZM32,26a2,2,0,1,1,2-2A2,2,0,0,1,32,26Z" />
                        <path d="M41.8,36H24.7A6.2,6.2,0,0,0,19,32a6,6,0,0,0-5.6,4H6.2a2,2,0,1,0,0,4h7.2A6,6,0,0,0,19,44a6.2,6.2,0,0,0,5.7-4H41.8a2,2,0,1,0,0-4ZM19,40a2,2,0,1,1,2-2A2,2,0,0,1,19,40Z" />
                    </g>
                </g>
                </g>
            </svg>
        </>
    );
};

export default SvgFilter;
