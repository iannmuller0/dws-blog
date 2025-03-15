import { useState } from "react";
import type { IFilter } from "../../../list/components/filter/interface";
import * as S from "./sort.styles";
import SvgUpDown from "../../../../assets/icons/upDown";

export const Sort = ({ handleSort }: IFilter) => {
	const [oldest, setOldest] = useState<boolean>(false);

	const toggleSort = () => {
		setOldest(!oldest);
		handleSort?.(oldest);
	};

	return (
		<S.Sort onClick={toggleSort}>
			<span>{!oldest ? "Newest first" : "Oldest first"}</span>
			<SvgUpDown />
		</S.Sort>
	);
};
