import { Outlet } from 'react-router-dom'
import Navber from './Home/Navber';
import Footer from './Home/Footer';

const App = () => {
  return (
    <div>
      <div >
        <Navber />
        <Outlet />
      </div>
      <Footer/>
    </div>
  );
};

export default App;