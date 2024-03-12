import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
    
    return (
        <div className="home">
            {isPending && <div>Loading...</div>}
            {error && <div style={{ color: 'red' }}>{error}</div>} {/* Render error message */}
            {blogs && <BlogList blogs={blogs} title="All blogs!" />}
        </div>
    );
};

export default Home;
