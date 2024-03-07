import { useState } from 'react';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'my website', body: 'loren ipsum...', author: 'faraj', id: 1},
        { title: 'welcome party!', body: 'loren ipsum...', author: 'Omar', id: 2},
        { title: 'web dev top tips', body: 'loren ipsum...', author: 'Zakariya', id: 3}
    ])

    return (
        <div className="home">
            <h2>Homepage</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blogs.id}>
                <h2>{ blog.title }</h2>
                <p>Written by { blog.author }</p>
            </div>
            ))}
        </div>
    );
}
 
export default Home;