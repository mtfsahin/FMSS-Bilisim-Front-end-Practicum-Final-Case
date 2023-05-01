import { Outlet, } from 'react-router-dom';
import Header from './components/common/Header';
import Routers from './router/Routers';
import { StarshipProvider } from './context/StarshipContext';
import StarBackground from './components/StarBackground/StarBackgound';
import Footer from './components/common/Footer';

function App() {
  return (
    <StarshipProvider>
      {/* Header */}
      <Header />
      {/* Routers */}
      <Routers />
      {/* Animated stars background */}
      <StarBackground />
      {/* displays the content with Outlet */}
      <Outlet></Outlet>
      {/* Footer */}
      <Footer />
    </StarshipProvider>
  );
}

export default App;
