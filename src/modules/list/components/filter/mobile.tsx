import { Sort } from "../../../shared/components";
import { FlexWrapper } from "../../pages/list.styles";
import Dropdown from "../dropdown/dropdown";
import type { IFilter } from "./interface";

const FilterMob = ({ categoryList, authorList, handleSort }: IFilter) => {
	return (
		<FlexWrapper>
			<Dropdown items={categoryList}>Category</Dropdown>
			<Dropdown items={authorList}>Autor</Dropdown>
			<Sort handleSort={handleSort} />
		</FlexWrapper>
	);
};

export default FilterMob;
