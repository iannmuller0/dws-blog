import React from "react";
import type { SearchMobProps } from "./interface";

import useScreenSize from "../../utils/useBreakpoint";
const SearchMob = React.lazy(() => import("./mobile"));
const SearchDesk = React.lazy(() => import("./desktop"));

export const Search: React.FC<SearchMobProps> = ({ onSearch, setIsExpanded, isExpanded }) => {
	const isMobile = useScreenSize();

	return isMobile ? (
		<SearchMob setIsExpanded={setIsExpanded} isExpanded={isExpanded} onSearch={onSearch} />
	) : (
		<SearchDesk onSearch={onSearch} />
	);
};
