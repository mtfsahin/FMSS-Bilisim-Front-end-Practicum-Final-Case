import { Link, Outlet, } from 'react-router-dom';


function App() {

  return (
    <div>
      <nav className="bg-gray-100 flex gap-4 p-5">
        <Link to="/"><span>Home</span></Link>
        <Link to="/starships"><span>Starships</span></Link>
        <Link to="/about"><span>About</span></Link>
      </nav>
      {/* displays the content with Outlet */}
      <Outlet></Outlet>
      
    </div>
  );
}

export default App;
