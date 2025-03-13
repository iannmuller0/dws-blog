import { Info, Title, Description, Wrapper, Container } from "./card.styles";
import Tag from "./components/tag/tag";
import type { ICard } from "./interface";

const Card = ({ img, title, description, date, autorName, categories }: ICard) => {
	return (
		<Wrapper>
			<img height={196} alt="post" src={img} />
			<Container>
				<Info>{date}</Info> <Info>{autorName}</Info>
				<Title>{title}</Title>
				<Description>{description}</Description>
                {categories.map((category)=> (
                <Tag text={category.name} key={category.id} />
                ))}
			</Container>
		</Wrapper>
	);
};

export default Card;
