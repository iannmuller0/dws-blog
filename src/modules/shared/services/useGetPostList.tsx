import axios from "axios";
import { useState, useEffect, useCallback } from "react";
import type { IPost } from "../../list/pages/interface";

const useGetPostList = () => {
	const [data, setData] = useState<IPost[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);

	//remover daqui depois
	const sort = useCallback((array: IPost[]) => {
		return array.sort((a, b) => {
			const dateA = new Date(a.createdAt).getTime();
			const dateB = new Date(b.createdAt).getTime();
			return dateB - dateA;
		});
	}, []);

	useEffect(() => {
		const fetchData = async () => {
			setIsError(false);
			setIsLoading(true);

			try {
				const result = await axios(
					"https://tech-test-backend.dwsbrazil.io/posts",
				);
				setData(sort(result.data));
			} catch (error) {
				console.log(error);
				setIsError(true);
			}

			setIsLoading(false);
		};

		fetchData();
	}, [sort]);

	return { data, isLoading, isError };
};

export default useGetPostList;
