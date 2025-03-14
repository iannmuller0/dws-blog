import { Sort } from "../../../shared/components";
import { SortText, FlexWrapper, Blog } from "./filter.styles";

const FilterDesk = () => {
	return (
		<FlexWrapper>
			<Blog>DWS Blog</Blog>
			<div>
				<SortText>Sort by:</SortText>
				<Sort>Newest first</Sort>
			</div>
		</FlexWrapper>
	);
};

export default FilterDesk;
