import { useState } from "react";
import {
	H2,
	Header as HeaderS,
	HeaderText,
	Hr,
} from "../../../list/pages/list.styles";
import { Search } from "../search";

interface IHeader {
	handleSearch: (value: string) => void;
}

const Header = ({ handleSearch }: IHeader) => {
	const [isExpanded, setIsExpanded] = useState<boolean>(false);

	return (
		<>
			<HeaderS isExpanded={isExpanded}>
				<HeaderText isExpanded={isExpanded}>
					<h1>dentsu</h1>
					<H2>world services</H2>
				</HeaderText>
				<Search
					isExpanded={isExpanded}
					setIsExpanded={setIsExpanded}
					onSearch={handleSearch}
				/>
			</HeaderS>
			<Hr />
		</>
	);
};

export default Header;
