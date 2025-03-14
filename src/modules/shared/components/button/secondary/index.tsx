import { SecondaryButton as Button } from "./secondary.styles";
import SvgArrowLeft from "../../../../../assets/icons/arrowLeft";

interface Ibutton {
	children?: string;
	onClick?: () => void;
}

export const SecondaryButton = ({ children, onClick }: Ibutton) => {
	return (
		<Button onClick={onClick}>
			<SvgArrowLeft />
			<span>{children}</span>
		</Button>
	);
};
