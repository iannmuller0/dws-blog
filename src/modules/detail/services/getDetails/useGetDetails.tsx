import axios from "axios";
import { useEffect, useState } from "react";

const useGetDetails = (id?: string) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsError(false);
            setIsLoading(true);

            try {
                const result = await axios(
                    `https://tech-test-backend.dwsbrazil.io/posts/${id}`,
                );
                setData(result.data);
            } catch (error) {
                console.log(error);
                setIsError(true);
            }

            setIsLoading(false);
        };

        fetchData();
    }, [id]);

    return { data, isLoading, isError };
};

export default useGetDetails;
