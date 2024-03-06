import Navbar from './Navbar';
import Home from './Home';

function App() {

  return (
    <div className="App">
      <Navbar />
      <div className="content" styles={{
        // coloe: "white",
        // backgorundColor: '#f1356d',
        // borderRadius: '8px',
      }}>
        <Home />
      </div>
    </div>
  );
}

export default App;
