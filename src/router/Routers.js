import About from '../pages/about';
import Details from '../components/details';
import Home from '../pages/home';
import { Routes, Route, } from 'react-router-dom'
import PageNotFound from '../pages/PageNotFound';

const Routers = () => {
    return (
        <Routes>
            {/* I write other routes in / so that the routes do not disappear from the screen when the pages change */}
            <Route path="/" element={<Home />} />          
                {/* after listing the starships, when you click on the starships, it creates a route according to the id of the starships */}
                <Route path="/starships/:starshipsId" element={<Details />} />
                {/* if searched page is not found this will be this output */}
                <Route path="*" element={<PageNotFound />} />
                {/* About page */}
                <Route path="/about" element={<About />} />
        </Routes>
    );
};
export default Routers;
