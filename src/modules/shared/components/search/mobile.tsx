import type React from "react";
import { useState } from "react";
import SvgSearch from "../../../../assets/icons/search";
import { Wrapper, IconContainer, ExpandedInput, InputWrapper } from "./search.styles";
import type { ISearchMobProps } from "./interface";

const SearchMob: React.FC<ISearchMobProps> = ({ onSearch, setIsExpanded, isExpanded }) => {
	const [query, setQuery] = useState<string>("");


	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setQuery(event.target.value);
	};

	const handleIconClick = (
		event: React.MouseEvent<HTMLDivElement, MouseEvent>,
	) => {
		event.preventDefault();
		setIsExpanded(true);
	};

	const handleSubmit = (
		event: React.MouseEvent<HTMLDivElement, MouseEvent>,
	) => {
		event.preventDefault();
		onSearch(query);
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
