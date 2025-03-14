import React from "react";
import useScreenSize from "../../utils/useBreakpoint";
import type { ISearchMobProps } from "./interface";

const SearchMob = React.lazy(() => import("./mobile"));
const SearchDesk = React.lazy(() => import("./desktop"));

export const Search: React.FC<ISearchMobProps> = ({
	onSearch,
	setIsExpanded,
	isExpanded,
}) => {
	const isMobile = useScreenSize();

	return isMobile ? (
		<SearchMob
			setIsExpanded={setIsExpanded}
			isExpanded={isExpanded}
			onSearch={onSearch}
		/>
	) : (
		<SearchDesk onSearch={onSearch} />
	);
};
