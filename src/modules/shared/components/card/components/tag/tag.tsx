import type { ITag } from "./interface";
import { Wrapper } from "./tag.styles";

const Tag = ({ text }: ITag) => {
	return (
		<Wrapper>
			<span>{text}</span>
		</Wrapper>
	);
};

export default Tag;
