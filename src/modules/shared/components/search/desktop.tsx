import type React from "react";
import { useState } from "react";
import SvgSearch from "../../../../assets/icons/search";
import { Wrapper, IconContainer } from "./search.styles";
import type { SearchProps } from "./interface";

const SearchDesk: React.FC<SearchProps> = ({ onSearch }) => {
	const [query, setQuery] = useState<string>("");

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setQuery(event.target.value);
	};

	const handleSubmit = (
		event: React.MouseEvent<HTMLDivElement, MouseEvent>,
	) => {
		event.preventDefault();
		onSearch(query);
	};

	return (
		<Wrapper>
			<input
				name="search"
				type="text"
				value={query}
				onChange={handleInputChange}
				placeholder="Search"
			/>
			<IconContainer onClick={handleSubmit}>
				<SvgSearch />
			</IconContainer>
		</Wrapper>
	);
};

export default SearchDesk;
