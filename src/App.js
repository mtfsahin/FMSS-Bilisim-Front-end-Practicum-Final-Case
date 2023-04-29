import { Outlet, } from 'react-router-dom';
import Header from './components/common/Header';
import Routers from './router/Routers';
import { StarshipProvider } from './context/StarshipContext';
import StarBackground from './components/StarBackground/StarBackgound';

function App() {

  return (

    <StarshipProvider>
      <StarBackground />
      <div>
        <Header />

        <Routers />
        {/* displays the content with Outlet */}
        <Outlet></Outlet>
      </div>

    </StarshipProvider>


  );
}

export default App;
