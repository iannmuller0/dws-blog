import removeName from "../../../shared/utils/removeName";
import { Card, Title, SubTitle, Item, Hr } from "./filter.styles";
import type { IFilter } from "./interface";

const FilterCard = ({ categoryList, authorList }: IFilter) => {
	return (
		<Card>
			<Title>Filters</Title>
			<SubTitle>Category</SubTitle>
			{categoryList?.map((category) => (
				<div key={category.id}>
					<Item>{category.name}</Item>
					<Hr />
				</div>
			))}
			<SubTitle>Author</SubTitle>
			{authorList?.map((author) => (
				<div key={author.id}>
					<Item>{removeName(author.name)}</Item>
					<Hr />
				</div>
			))}
		</Card>
	);
};

export default FilterCard;
