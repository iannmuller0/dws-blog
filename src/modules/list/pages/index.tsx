import { useState } from "react";
import { Header, HeaderText, H2, Hr, Container } from "./list.styles";
import { Search } from "../../shared/components";
import useGetPostList from "../../shared/services/useGetPostList";
import Card from "../../shared/components/card";
import type { IPost } from "./interface";
import useGetCategoryList from "../services/useGetCategoryList";
import useGetAuthorList from "../services/authorList/useGetAuthorList";
import { Filter } from "../components/filter";

const List = () => {
	const [isExpanded, setIsExpanded] = useState<boolean>(false);
	const { data: postList, isLoading, isError } = useGetPostList();
	const { data: categoryList } = useGetCategoryList();
	const { data: authorList } = useGetAuthorList();

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
			<Filter categoryList={categoryList} authorList={authorList} />
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
