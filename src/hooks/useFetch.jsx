import React from "react";
import { useState, useEffect } from "react";
const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [results, setResults] = useState(null);

  const getData = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setResults(data);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [url]);
  return { isError, isLoading, results };
};

export default useFetch;
