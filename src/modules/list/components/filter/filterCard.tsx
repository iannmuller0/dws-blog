import removeName from "../../../shared/utils/removeName";
import { Card, Title, SubTitle, Item, Hr } from "./filter.styles";
import type { IFilter } from "./interface";

const FilterCard = ({ categoryList, authorList }: IFilter) => {
	return (
		<Card>
			<Title>Filters</Title>
			<SubTitle>Category</SubTitle>
			{categoryList.map((category) => (
				<>
					<Item key={category.id}>{category.name}</Item>
					<Hr key={category.id} />
				</>
			))}
			<SubTitle>Author</SubTitle>
			{authorList.map((author) => (
				<>
					<Item key={author.id}>{removeName(author.name)}</Item>
					<Hr key={author.id} />
				</>
			))}
		</Card>
	);
};

export default FilterCard;
