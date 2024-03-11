import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            const fetchData = async () => {
                try {
                    const response = await fetch('http://localhost:8000/blogs');
                    const data = await response.json();
                    setBlogs(data);
                    setIsPending(false);
                     
                    
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            };
    
            fetchData();
        }, 1000)
         // Call fetchData outside of useEffect

    }, []); // Make sure to pass an empty dependency array to run useEffect only once

    //         ('http://localhost:8000/blogs')
    //         .then(res => res.json()
    //         )
    //         .then(data => {
    //             setBlogs(data);
    //             console.log(blogs);
    //         });
    // }, [blogs]);

    return (
        <div className="home">
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All blogs!" />}
        </div>
    );
};

export default Home;
