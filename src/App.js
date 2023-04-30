import { Outlet, } from 'react-router-dom';
import Header from './components/common/Header';
import Routers from './router/Routers';
import { StarshipProvider } from './context/StarshipContext';
import StarBackground from './components/StarBackground/StarBackgound';
import Footer from './components/common/Footer';

function App() {

  return (

    <StarshipProvider>
      <StarBackground />

      <Header />

      <Routers />
      {/* displays the content with Outlet */}
      <Outlet></Outlet>


      <Footer />
    </StarshipProvider>


  );
}

export default App;
