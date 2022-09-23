import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Navbar from './Shared/Navbar/Navbar';
import About from './Pages/About/About';
import Coins from './Pages/Coins/Coins';
import Contact from './Pages/Contact/Contact';
import CoinDetails from './Pages/Coins/CoinDetails';

function App() {
  return (
    <div className="">
     <div className="">
      <Navbar></Navbar>
       <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="about" element={<About></About>} />
        <Route path="coins" element={<Coins></Coins>} />
        <Route path="/coin-details/:id" element={<CoinDetails></CoinDetails>} />
        <Route path="contact" element={<Contact></Contact>} />
       
      </Routes>
     
    </div>
    </div>
  );
}

export default App;
