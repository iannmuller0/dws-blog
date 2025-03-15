import { useNavigate, useParams } from "react-router-dom";
import { SecondaryButton } from "../../shared/components";
import Header from "../../shared/components/header";
import useGetDetails from "../services/getDetails/useGetDetails";
import { AuthorWrapper, ImgWrapper, Title, Container } from "./details.styles";
import Avatar from "../components/avatar";
import { IDetails } from "./interface";


const Details = () => {
    const { id } = useParams();
    const { data: details }: IDetails = useGetDetails(id);
    const navigate = useNavigate();

    return (
        <>
            <Header handleSearch={() => { }} />
            <SecondaryButton onClick={() => navigate('/')}>Back</SecondaryButton>
            <Container>
                <Title>{details?.title}</Title>
                <AuthorWrapper>
                    <Avatar src={details?.author?.profilePicture} name={details?.author?.name} date={details?.author?.createdAt} />
                </AuthorWrapper>
                <ImgWrapper>
                    <img height={150} alt="post" src={details?.thumbnail_url} />
                </ImgWrapper>
                <span>{details?.content}</span>
            </Container>
        </>
    );
};

export default Details;
