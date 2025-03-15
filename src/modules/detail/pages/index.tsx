import { useNavigate, useParams } from "react-router-dom";
import { Hr } from "../../list/pages/list.styles";
import { SecondaryButton } from "../../shared/components";
import Header from "../../shared/components/header";
import Avatar from "../components/avatar";
import LatestPosts from "../components/latestPosts";
import useGetDetails from "../services/getDetails/useGetDetails";
import {
	AuthorWrapper,
	Container,
	Content,
	ImgWrapper,
	Title,
} from "./details.styles";
import type { IDetails } from "./interface";

const Details = () => {
	const { id } = useParams();
	const { data: details }: IDetails = useGetDetails(id);
	const navigate = useNavigate();

	return (
		<>
			<Header handleSearch={() => {}} />
			<SecondaryButton onClick={() => navigate("/")}>Back</SecondaryButton>
			<Container>
				<Title>{details?.title}</Title>
				<AuthorWrapper>
					<Avatar
						src={details?.author?.profilePicture}
						name={details?.author?.name}
						date={details?.author?.createdAt}
					/>
				</AuthorWrapper>
				<ImgWrapper>
					<img height={150} alt="post" src={details?.thumbnail_url} />
				</ImgWrapper>
				<Content>{details?.content}</Content>
				<Hr />
				<LatestPosts />
			</Container>
		</>
	);
};

export default Details;
