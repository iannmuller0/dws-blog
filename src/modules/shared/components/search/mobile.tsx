import type React from "react";
import { useState } from "react";
import SvgSearch from "../../../../assets/icons/search";
import { Wrapper, IconContainer } from "./search.styles";
import type { SearchProps } from "./interface";

const SearchMob: React.FC<SearchProps> = ({ onSearch }) => {
	const [query, setQuery] = useState<string>("");
	const [isInputVisible, setIsInputVisible] = useState<boolean>(false);

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setQuery(event.target.value);
	};

	const handleIconClick = (
		event: React.MouseEvent<HTMLDivElement, MouseEvent>,
	) => {
		event.preventDefault();
		setIsInputVisible(true);
	};

	const handleSubmit = (
		event: React.MouseEvent<HTMLDivElement, MouseEvent>,
	) => {
		event.preventDefault();
		onSearch(query);
	};

	return (
		<Wrapper onClick={handleSubmit}>
			{isInputVisible && (
				<Wrapper>
					<input
						name="search"
						type="text"
						value={query}
						onChange={handleInputChange}
					/>
				</Wrapper>
			)}
			{!isInputVisible && (
				<IconContainer onClick={handleIconClick}>
					<SvgSearch />
				</IconContainer>
			)}
		</Wrapper>
	);
};

export default SearchMob;
