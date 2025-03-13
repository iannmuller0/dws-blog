import { useState } from "react";
import { Header, HeaderText, H2, Hr, FlexWrapper, Container } from "./list.styles";
import Dropdown from "../components/dropdown/dropdown";
import { Sort, Search } from "../../shared/components";
import useGetList from "../../shared/services/useGetList";
import Card from "../../shared/components/card";
import type { IPost } from "./interface";

const List = () => {
	const [isExpanded, setIsExpanded] = useState<boolean>(false);
	const { data, isLoading, isError } = useGetList();

	const items = [
		{ label: "Item 1", onClick: () => console.log("Item 1 clicked") },
		{ label: "Item 2", onClick: () => console.log("Item 2 clicked") },
		{ label: "Item 3", onClick: () => console.log("Item 3 clicked") },
	];
	return (
		<>
			<Header isExpanded={isExpanded}>
				<HeaderText isExpanded={isExpanded}>
					<h1>dentsu</h1>
					<H2>world services</H2>
				</HeaderText>
				<Search
					isExpanded={isExpanded}
					setIsExpanded={setIsExpanded}
					onSearch={() => {}}
				/>
			</Header>
			<Hr />
			<FlexWrapper>
				<Dropdown items={items}>Category</Dropdown>
				<Dropdown items={items}>Autor</Dropdown>
				<Sort>Newest first</Sort>
			</FlexWrapper>
			<Container>
				{data.map((post: IPost) => (
					<Card
						key={post.id}
						img={post.thumbnail_url}
						title={post.title}
						description={post.content}
						date={post.createdAt}
						autorName={post.author.name}
						categories={post.categories}
					/>
				))}
			</Container>
		</>
	);
};

export default List;
