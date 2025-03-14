import { Sort } from "../../../shared/components";
import { SortText, FlexWrapper, Blog } from "./filter.styles";
import type { IFilter } from "./interface";

const FilterDesk = ({ handleSort }: IFilter) => {
	return (
		<FlexWrapper>
			<Blog>DWS Blog</Blog>
			<div>
				<SortText>Sort by:</SortText>
				<Sort handleSort={handleSort} />
			</div>
		</FlexWrapper>
	);
};

export default FilterDesk;
