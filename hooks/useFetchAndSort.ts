import { useState, useEffect } from "react";

// custom hook for fetching and sorting data based on program type and sort by options (newest, oldest, rating, random)
const useFetchAndSort = (url, programType) => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortBy, setSortBy] = useState("Sırala");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        const filteredData = data.entries.filter(
          (entry) => entry.programType === programType
        );

        setData(filteredData);
        setFilteredData(filteredData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, programType]);

  useEffect(() => {
    let sortedData = [...data];

    switch (sortBy) {
      case "newest":
        sortedData.sort((a, b) => b.releaseYear - a.releaseYear);
        break;
      case "oldest":
        sortedData.sort((a, b) => a.releaseYear - b.releaseYear);
        break;
      case "rating":
        alert("IMDb rating data is not available in the database.");
        setSortBy("newest");
        break;
      case "random":
        sortedData.sort(() => Math.random() - 0.5);
        break;
      default:
        break;
    }

    setFilteredData(sortedData);
  }, [sortBy, data]);

  return {
    filteredData,
    loading,
    error,
    sortBy,
    setSortBy,
  };
};

export default useFetchAndSort;
