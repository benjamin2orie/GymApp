import './App.css';
import Navbar from './Components/Layout/Navbar';
// import Jubim from './Components/Layout/Jubim';
import { Routes, Route} from 'react-router-dom';
import Home from './Components/Layout/PagesMenu/Home';
import Services from './Components/Layout/PagesMenu/Services';
import Contact from './Components/Layout/PagesMenu/Contact';
function App() {
  return (
    <div className="App">
        <Routes>
            <Route path='*' element={<>
            <Navbar/>
            {/* <Jubim/> */}
            </>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/services' element={<Services/>}/>
            <Route path='/contact' element={<Contact/>}/>
           
        </Routes>
    </div>
  );
}

export default App;
