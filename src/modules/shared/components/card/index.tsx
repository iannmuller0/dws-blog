import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import removeName from "../../utils/removeName";
import {
	Container,
	Description,
	Dot,
	Info,
	Title,
	Wrapper,
} from "./card.styles";
import Tag from "./components/tag/tag";
import type { ICard } from "./interface";

const Card = ({
	img,
	title,
	description,
	date,
	autorName,
	categories,
}: ICard) => {
	const validDate = new Date(date);

	return (
		<Wrapper>
			<img height={196} alt="post" src={img} />
			<Container>
				<Info>{format(validDate, "MMM dd, yyyy", { locale: ptBR })}</Info>
				<Dot />
				<Info>{removeName(autorName)}</Info>
				<Title>{title}</Title>
				<Description>{description}</Description>
				{categories.map((category) => (
					<Tag text={category.name} key={category.id} />
				))}
			</Container>
		</Wrapper>
	);
};

export default Card;
