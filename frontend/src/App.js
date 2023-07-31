// import './App.css';
import './style.css';
import Registration from './Registration';
import Rest from './restaurant';
// import HotelRoomList from './HotelRoomList';
import BookingPage from './Book';
import Loginsignup from './Loginsignup';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
 
 <BrowserRouter>
        <Routes>
        <Route path="/" element={<Registration/>}/>
        <Route path="/login" element={<Loginsignup />} />
        <Route path="/res" element={<Rest/>}/>
        <Route path="/bok" element={<BookingPage/>}/>
        
        </Routes>
        </BrowserRouter>
    </div>
    );
  }

export default App;
