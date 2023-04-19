import { Link, Outlet, Routes, Route,} from 'react-router-dom';
import About from './components/about';
import Books from './components/books';

function App() {

  return (
    <div>
      <nav className="bg-gray-100 flex gap-4">
        <Link to="/"><span>Home Page</span></Link>
        <Link to="/books"><span>Books Page</span></Link>
        <Link to="/about"><span>About Page</span></Link>
        <Link to="/books/details"><span>Details Page</span></Link>

      </nav>
      {/* displays the content with Outlet */}
      <Outlet></Outlet>


      <Routes>
        {/* I write other routes in / so that the routes do not disappear from the screen when the pages change */}
        <Route path="/" >
          <Route path="/about" element={<About />} >
            <Route path='/about/detail' element={<div>About Detail</div>}></Route>
          </Route>

          <Route path="/books" element={<Books />} >
            <Route path='/books/details' element={<div>Detail books</div>}></Route>
          </Route>

        </Route>
      </Routes>
    </div>
  );
}

export default App;
