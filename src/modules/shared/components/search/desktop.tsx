import type React from "react";
import { useState } from "react";
import SvgSearch from "../../../../assets/icons/search";
import { Wrapper, IconContainer, InputDeskContainer } from "./search.styles";
import type { ISearchProps } from "./interface";

const SearchDesk: React.FC<ISearchProps> = ({ onSearch }) => {
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
			<InputDeskContainer>
				<input
					name="search"
					type="text"
					value={query}
					onChange={handleInputChange}
					placeholder="Search"
				/>
			</InputDeskContainer>
			<IconContainer onClick={handleSubmit}>
				<SvgSearch />
			</IconContainer>
		</Wrapper>
	);
};

export default SearchDesk;
