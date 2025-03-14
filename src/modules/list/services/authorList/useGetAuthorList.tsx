import axios from "axios";
import { useState, useEffect, useCallback } from "react";
import removeName from "../../../shared/utils/removeName";
import type { IAuthor } from "./interface";

const useGetAuthorList = () => {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);

	const sanitazeData = useCallback((data: IAuthor[]) => {
		data.map((author: IAuthor) => ({ ...author, name: removeName(author.name) }));
	}, []);

	useEffect(() => {
		const fetchData = async () => {
			setIsError(false);
			setIsLoading(true);

			try {
				const result = await axios(
					"https://tech-test-backend.dwsbrazil.io/authors",
				);
				sanitazeData(result.data);
				setData(result.data);
			} catch (error) {
				console.log(error);
				setIsError(true);
			}

			setIsLoading(false);
		};

		fetchData();
	}, [sanitazeData]);

	return { data, isLoading, isError };
};

export default useGetAuthorList;
