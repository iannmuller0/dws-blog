import { useNavigate } from "react-router-dom";
import { useLastPosts } from "../../../../store/hooks";
import type { IPost } from "../../../list/pages/interface";
import Card from "../../../shared/components/card";
import useScreenSize from "../../../shared/utils/useBreakpoint";
import { Title, Wrapper } from "./latestPosts.styles";

const LatestPosts = () => {
	const lastPosts = useLastPosts();
	const navigate = useNavigate();
	const isMobile = useScreenSize();

	const title = isMobile ? "Last articles" : "Lastest articles";

	const handleClick = (itemId: string) => {
		navigate(`/details/${itemId}`);
	};
	return (
		<>
			<Title>{title}</Title>
			<Wrapper>
				{lastPosts?.map((post: IPost) => (
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
			</Wrapper>
		</>
	);
};

export default LatestPosts;
