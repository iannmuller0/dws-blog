import { useState } from "react";
import {
	Header,
	HeaderText,
	H2,
	Hr,
	FlexWrapper,
	Container,
} from "./list.styles";
import Dropdown from "../components/dropdown/dropdown";
import { Sort, Search } from "../../shared/components";
import useGetPostList from "../../shared/services/useGetPostList";
import Card from "../../shared/components/card";
import type { IPost } from "./interface";
import useGetCategoryList from "../services/useGetCategoryList";
import useGetAuthorList from "../services/authorList/useGetAuthorList";
import useScreenSize from "../../shared/utils/useBreakpoint";

const List = () => {
	const [isExpanded, setIsExpanded] = useState<boolean>(false);
	const { data: postList, isLoading, isError } = useGetPostList();
	const { data: categoryList } = useGetCategoryList();
	const { data: authorList } = useGetAuthorList();
	const isMobile = useScreenSize();

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
			{isMobile && (
				<FlexWrapper>
					<Dropdown items={categoryList}>Category</Dropdown>
					<Dropdown items={authorList}>Autor</Dropdown>
					<Sort>Newest first</Sort>
				</FlexWrapper>
			)}
			<Container>
				{postList.map((post: IPost) => (
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
