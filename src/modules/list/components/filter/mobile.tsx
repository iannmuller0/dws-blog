import { FlexWrapper } from "../../pages/list.styles";
import Dropdown from "../dropdown/dropdown";
import { Sort } from "../../../shared/components";
import type { IFilter } from "./interface";

const FilterMob = ({ categoryList, authorList }: IFilter) => {
	return (
		<FlexWrapper>
			<Dropdown items={categoryList}>Category</Dropdown>
			<Dropdown items={authorList}>Autor</Dropdown>
			<Sort>Newest first</Sort>
		</FlexWrapper>
	);
};

export default FilterMob;
