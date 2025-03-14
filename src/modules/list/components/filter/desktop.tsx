import { FlexWrapper } from "../../pages/list.styles";
import Dropdown from "../dropdown/dropdown";
import { Sort } from "../../../shared/components";

interface IFilter {
    categoryList: { name: string; id: string; onClick: () => void }[]
    authorList: { name: string; id: string; onClick: () => void }[]
};

const FilterDesk = ({ categoryList, authorList }: IFilter) => {
	return (
		<FlexWrapper>
			<Dropdown items={categoryList}>Category</Dropdown>
			<Dropdown items={authorList}>Autor</Dropdown>
			<Sort>Newest first</Sort>
		</FlexWrapper>
	);
};

export default FilterDesk;
