import type React from "react";
import { useState } from "react";
import SvgSearch from "../../../../assets/icons/search";
import type { ISearchProps } from "./interface";
import { IconContainer, Wrapper } from "./search.styles";

const SearchDesk: React.FC<ISearchProps> = ({ onSearch }) => {
	const [query, setQuery] = useState<string>("");

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setQuery(event.target.value);
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		onSearch(query.trim());
	};

	return (
		<Wrapper>
			<form onSubmit={handleSubmit}>
				<input
					name="search"
					type="text"
					value={query}
					onChange={handleInputChange}
					placeholder="Search"
					aria-label="Search input"
				/>
				<IconContainer as="button" type="submit" aria-label="Perform search">
					<SvgSearch />
				</IconContainer>
			</form>
		</Wrapper>
	);
};

export default SearchDesk;
