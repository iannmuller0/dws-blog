import { Sort } from "../../../shared/components";
import { Blog, FilterWrapper, FlexWrapper, SortText } from "./filter.styles";
import type { IFilter } from "./interface";

const FilterDesk = ({ handleSort }: IFilter) => {
	return (
		<FlexWrapper>
			<Blog>DWS Blog</Blog>
			<FilterWrapper>
				<SortText>Sort by:</SortText>
				<Sort handleSort={handleSort} />
			</FilterWrapper>
		</FlexWrapper>
	);
};

export default FilterDesk;
