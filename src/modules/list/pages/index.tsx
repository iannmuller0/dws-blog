import { useCallback, useEffect, useState } from "react";
import {
	Header,
	HeaderText,
	H2,
	Hr,
	Container,
	FlexWrapper,
} from "./list.styles";
import { Search } from "../../shared/components";
import useGetPostList from "../../shared/services/useGetPostList";
import Card from "../../shared/components/card";
import type { IPost } from "./interface";
import useGetCategoryList from "../services/useGetCategoryList";
import useGetAuthorList from "../services/authorList/useGetAuthorList";
import { Filter } from "../components/filter";
import FilterCard from "../components/filter/filterCard";
import useScreenSize from "../../shared/utils/useBreakpoint";

const List = () => {
	const { data: postList, isLoading, isError } = useGetPostList();
	const { data: categoryList } = useGetCategoryList();
	const { data: authorList } = useGetAuthorList();
	const isMobile = useScreenSize();

	const [isExpanded, setIsExpanded] = useState<boolean>(false);
	const [posts, setPosts] = useState(postList);

	//adicionar suspense e tratamento de erro
	console.log(isLoading, isError);

	useEffect(() => {
		setPosts(postList);
	}, [postList]);

	//adicionar tela not found
	const handleSearch = (value: string) => {
		const searchTerm = value.toLowerCase().trim();
		const filteredList = postList.filter((post: IPost) =>
			post.title.toLowerCase().includes(searchTerm),
		);
		setPosts(filteredList);
	};

	const handleSort = useCallback(
		(oldest: boolean) => {
			return [...postList].sort((a, b) => {
				const dateA = new Date(a.createdAt).getTime();
				const dateB = new Date(b.createdAt).getTime();

				return oldest ? dateA - dateB : dateB - dateA;
			});
		},
		[postList],
	);

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
					onSearch={handleSearch}
				/>
			</Header>
			<Hr />
			<Filter
				handleSort={handleSort}
				categoryList={categoryList}
				authorList={authorList}
			/>
			<FlexWrapper>
				{!isMobile && (
					<FilterCard categoryList={categoryList} authorList={authorList} />
				)}
				<Container>
					{posts?.map((post: IPost) => (
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
			</FlexWrapper>
		</>
	);
};

export default List;
