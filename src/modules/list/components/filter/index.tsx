import React from "react";
import useScreenSize from "../../../shared/utils/useBreakpoint";
import type { IFilter } from "./interface";

const FilterMob = React.lazy(() => import("./mobile"));
const FilterDesk = React.lazy(() => import("./desktop"));

export const Filter: React.FC<IFilter> = ({
	categoryList,
	authorList,
	handleSort,
}) => {
	const isMobile = useScreenSize();

	return isMobile ? (
		<FilterMob
			handleSort={handleSort}
			categoryList={categoryList}
			authorList={authorList}
		/>
	) : (
		<FilterDesk handleSort={handleSort} />
	);
};
