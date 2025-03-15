import { useCallback, useEffect, useState } from "react";
import Card from "../../shared/components/card";
import useScreenSize from "../../shared/utils/useBreakpoint";
import { Filter } from "../components/filter";
import FilterCard from "../components/filter/filterCard";
import useGetAuthorList from "../services/authorList/useGetAuthorList";
import useGetCategoryList from "../services/useGetCategoryList";
import type { IPost } from "./interface";
import {
	Container,
	FlexWrapper,
} from "./list.styles";
import { usePostsStore, usePostsActions } from "../../../store";
import Header from "../../shared/components/header";
import { useNavigate } from "react-router-dom";

const List = () => {
	const { postsList, loading, error } = usePostsStore();
	const { fetchPosts } = usePostsActions();
	const navigate = useNavigate();

	const { data: categoryList } = useGetCategoryList();
	const { data: authorList } = useGetAuthorList();
	const isMobile = useScreenSize();
	const [posts, setPosts] = useState(postsList);

	useEffect(() => {
		fetchPosts();
	}, [fetchPosts]);

	useEffect(() => {
		setPosts(postsList);
	}, [postsList]);

	//adicionar tela not found
	const handleSearch = (value: string) => {
		const searchTerm = value.toLowerCase().trim();
		const filteredList = postsList.filter((post: IPost) =>
			post.title.toLowerCase().includes(searchTerm),
		);
		setPosts(filteredList);
	};

	const handleSort = useCallback(
		(oldest: boolean) => {
			return [...postsList].sort((a, b) => {
				const dateA = new Date(a.createdAt).getTime();
				const dateB = new Date(b.createdAt).getTime();

				return oldest ? dateA - dateB : dateB - dateA;
			});
		},
		[postsList],
	);

	const handleFilterChange = useCallback(
		(categoryList: string[], authorList: string[]) => {
			if (!postsList) return;

			const hasCategoryFilter = categoryList.length > 0;
			const hasAuthorFilter = authorList.length > 0;

			if (!hasCategoryFilter && !hasAuthorFilter) {
				setPosts(postsList);
				return;
			}

			const filteredPosts = postsList.filter((post: IPost) => {
				const categoryMatch = hasCategoryFilter
					? post.categories.some((category) =>
						categoryList.includes(category.id),
					)
					: true;

				const authorMatch = hasAuthorFilter
					? authorList.includes(post.author.id)
					: true;
				return categoryMatch && authorMatch;
			});

			setPosts(filteredPosts);
		},
		[postsList],
	);

	const handleClick = (itemId: string) => {
		navigate(`/details/${itemId}`);
	};
	
	//adicionar suspense e tratamento de erro
	if (loading) return <div>Carregando...</div>;
	if (error) return <div>Erro: {error}</div>;

	return (
		<>
			<Header handleSearch={handleSearch} />
			<Filter
				handleSort={handleSort}
				categoryList={categoryList}
				authorList={authorList}
			/>
			<FlexWrapper>
				{!isMobile && (
					<FilterCard
						onFilterChange={handleFilterChange}
						categoryList={categoryList}
						authorList={authorList}
					/>
				)}
				<Container>
					{posts?.map((post: IPost) => (
						<Card
							onClick={() => handleClick(post.id)}
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
