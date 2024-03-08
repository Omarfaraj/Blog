import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'my website', body: 'loren ipsum...', author: 'faraj', id: 1},
        { title: 'welcome party!', body: 'loren ipsum...', author: 'Omar', id: 2},
        { title: 'web dev top tips', body: 'loren ipsum...', author: 'Zakariya', id: 3}
    ])

    const [name, setName] = useState('faraj');

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(name);
    }

    useEffect(() => {
        console.log('use effect ran');
        console.log(blogs);
    }, [name]);

    return (
        <div className="home">
            <BlogList blogs={blogs} title="All blogs!" handleDelete={handleDelete}/>
            <button onClick={() => setName('Omar')}>change name</button>
            <p>{ name }</p>
        </div>
    );
}
 
export default Home;