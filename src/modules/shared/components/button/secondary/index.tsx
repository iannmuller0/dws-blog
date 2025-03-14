import SvgArrowLeft from "../../../../../assets/icons/arrowLeft";
import { SecondaryButton as Button } from "./secondary.styles";

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
