import React from "react";
import type { SearchProps } from "./interface";

import useScreenSize from "../../utils/useBreakpoint";
const SearchMob = React.lazy(() => import("./mobile"));
const SearchDesk = React.lazy(() => import("./desktop"));

const Search: React.FC<SearchProps> = ({ onSearch }) => {
	const isMobile = useScreenSize();

	return (
		<div>
			{isMobile ? (
				<SearchMob onSearch={onSearch} />
			) : (
				<SearchDesk onSearch={onSearch} />
			)}
		</div>
	);
};

export default Search;
