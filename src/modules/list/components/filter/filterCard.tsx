import { useCallback, useState } from "react";
import { Card, Hr, Item, SubTitle, Title } from "./filter.styles";
import type { IFilter } from "./interface";
import { PrimaryButton } from "../../../shared/components";

const FilterCard = ({ categoryList, authorList, onFilterChange }: IFilter) => {
	const [selectedCategories, setSelectedCategories] = useState<Array<string>>(
		[],
	);
	const [selectedAuthors, setSelectedAuthors] = useState<Array<string>>([]);

	const updateHandler = useCallback((type: "Category" | "Author") => {
		return type === "Category"
			? { handler: setSelectedCategories }
			: { handler: setSelectedAuthors };
	}, []);

	const handleSelectItem = useCallback(
		(type: "Category" | "Author", id: string) => {
			const { handler } = updateHandler(type);
			handler((prev) =>
				prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
			);
		},
		[updateHandler],
	);

	const renderList = (
		list: { name: string; id: string; onClick: () => void }[] | undefined,
		title: "Category" | "Author",
		selectedList: string[],
	) => {
		return (
			<>
				<SubTitle>{title}</SubTitle>
				{list?.map((item) => {
					const isSelected = selectedList.includes(item.id);
					return (
						<div key={item.id}>
							<Item
								selected={isSelected}
								onClick={() => handleSelectItem(title, item.id)}
								role="button"
							>
								{item.name}
							</Item>
							<Hr />
						</div>
					);
				})}
			</>
		);
	};

	return (
		<Card>
			<Title>Filters</Title>
			{renderList(categoryList, "Category", selectedCategories)}
			{renderList(authorList, "Author", selectedAuthors)}
			<PrimaryButton onClick={() => {onFilterChange?.(selectedCategories, selectedAuthors)}}>Apply filters</PrimaryButton>
		</Card>
	);
};

export default FilterCard;
