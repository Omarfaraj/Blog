

const Home = () => { 
    let name = 'faraj'
     
    const handleClick = () => {
        console.log('Hello!')
    }

    return (
        <div className="home">
            <h2>Homepage</h2>
            <p>{ name }</p>
            <button onClick={(handleClick)}>Click me</button>
        </div>
    );
}
 
export default Home;