import { useEffect, useRef, useState } from "react"; // Adicionar useEffect
import type React from "react";
import SvgSearch from "../../../../assets/icons/search";
import type { ISearchMobProps } from "./interface";
import {
	ExpandedInput,
	IconContainer,
	InputWrapper,
	Wrapper,
} from "./search.styles";

const SearchMob: React.FC<ISearchMobProps> = ({
	onSearch,
	setIsExpanded,
	isExpanded,
}) => {
	const [query, setQuery] = useState<string>("");
	const previousQuery = useRef<string>("");

	useEffect(() => {
		if (
			query !== previousQuery.current &&
			(query.length >= 3 || query.length === 0)
		) {
			onSearch(query);
			previousQuery.current = query;
		}
	}, [query, onSearch]);

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = event.target.value;
		setQuery(newValue);

		if (newValue.length === 0) {
			onSearch("");
			previousQuery.current = "";
		}
	};

	const handleIconClick = (
		event: React.MouseEvent<HTMLDivElement, MouseEvent>,
	) => {
		event.preventDefault();
		setIsExpanded(true);
	};

	const handleBlur = () => {
		setIsExpanded(false);
	};

	return (
		<Wrapper>
			{isExpanded ? (
				<InputWrapper>
					<ExpandedInput
						name="search"
						type="text"
						aria-label="Search input"
						value={query}
						onChange={handleInputChange}
						autoFocus
						placeholder="Search..."
						onBlur={handleBlur}
					/>
				</InputWrapper>
			) : (
				<IconContainer onClick={handleIconClick}>
					<SvgSearch />
				</IconContainer>
			)}
		</Wrapper>
	);
};

export default SearchMob;
