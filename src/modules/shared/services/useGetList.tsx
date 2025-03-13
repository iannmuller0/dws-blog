import axios from "axios";
import { useState, useEffect } from "react";

const useGetList = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
  
    useEffect(() => {
      const fetchData = async () => {
        setIsError(false);
        setIsLoading(true);
  
        try {
          const result = await axios("https://tech-test-backend.dwsbrazil.io/posts");          
          setData(result.data);
        } catch (error) {
          console.log(error);
          setIsError(true);
        }
  
        setIsLoading(false);
      };
  
      fetchData();
    }, []);
  
    return { data, isLoading, isError };
  };

  export default useGetList;