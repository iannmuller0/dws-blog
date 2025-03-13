import {
	Info,
	Title,
	Description,
	Wrapper,
	Container,
	Dot,
} from "./card.styles";
import Tag from "./components/tag/tag";
import type { ICard } from "./interface";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

const Card = ({
	img,
	title,
	description,
	date,
	autorName,
	categories,
}: ICard) => {
	const validDate = new Date(date);

	const removeName = (autorName: string) => {
		const partes = autorName.split(" ");
		if (partes.length > 1) {
			return partes.slice(1);
		}

		return autorName;
	};

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
