import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null); // New state to store the error message

    useEffect(() => {
      const abortCont = new AbortController();

        const fetchData = async () => {
            try {
                const response = await fetch(url, { signal: abortCont.signal });
                
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                console.log(data);
                setData(data);
                setIsPending(false);
            } catch (error) {
                if (err.name === 'AbortError') {
                    console.log('fetch aborted');
                } else {
                    console.error('Error fetching data', error);
                    setError('Error fetching data. Please try again.'); // Set the error state
                    setIsPending(false); // Set isPending to false even in case of an error
                }
                
            }
        };

        // Call fetchData inside the setTimeout function
        setTimeout(() => {
            fetchData();
        }, 1000);
        return () => abortCont.abort();

        // Make sure to pass an empty dependency array to run useEffect only once
    }, [url]);
    return {data, isPending, error}
}

export default useFetch;