import React from "react";
import type { IFilter } from "./interface";
import useScreenSize from "../../../shared/utils/useBreakpoint";

const FilterMob = React.lazy(() => import("./mobile"));
const FilterDesk = React.lazy(() => import("./desktop"));

export const Search: React.FC<IFilter> = ({ categoryList, authorList }) => {
	const isMobile = useScreenSize();

	return isMobile ? (
		<FilterMob categoryList={categoryList} authorList={authorList} />
	) : (
		<FilterDesk categoryList={categoryList} authorList={authorList} />
	);
};
