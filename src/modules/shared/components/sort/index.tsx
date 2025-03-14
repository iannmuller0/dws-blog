import { useState } from "react";
import * as S from "./sort.styles";
import type { IFilter } from "../../../list/components/filter/interface";

export const Sort = ({ handleSort }: IFilter) => {
	const [oldest, setOldest] = useState<boolean>(false);

	const toggleSort = () => {
		setOldest(!oldest);
		handleSort?.(oldest);
	};

	return (
		<S.Sort onClick={toggleSort}>
			{!oldest ? "Newest first" : "Oldest first"}
		</S.Sort>
	);
};
