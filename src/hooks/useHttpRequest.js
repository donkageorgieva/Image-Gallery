import { useState, useCallback } from "react";

const useHttpRequest = () => {
  const [error, setError] = useState(false);
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const fetchImages = useCallback(async (config) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        config.baseURL + config.API_KEY + `&per_page=${config.amount}`,
        {
          method: config.method,
          headers: {
            Accept: "application/json",
          },
        }
      );
      if (!response.ok) {
        setError(true);
        throw new Error("Request failed");
      }
      const fetchedData = await response.json();
      setData(fetchedData);
    } catch (error) {
      setError(true);
    }
    setIsLoading(false);
  }, []);
  return {
    error,
    fetchImages,
    data,
    isLoading,
  };
};

export default useHttpRequest;
