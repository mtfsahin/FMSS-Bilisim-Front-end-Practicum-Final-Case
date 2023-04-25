import { Outlet, } from 'react-router-dom';
import Header from './components/common/Header';
import Routers from './router/Routers';
function App() {

  return (
    <div>
      <Header />
      <Routers/>
      
      {/* displays the content with Outlet */}
      <Outlet></Outlet>
    
    </div>
  );
}

export default App;
