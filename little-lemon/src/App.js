import Navigation from "./Components/Navigation";
import './Components/Styles/Navigation.css';
import Footer from "./Components/Footer";
import './Components/Styles/Footer.css';
import "./App.css";
import Reservation from "./Components/Reservation";
import { Route, Routes } from 'react-router-dom';
import MainPage from "./Components/MainPage";

function App() {
  return (
    <div className="app">
      <Navigation />
      <Routes>
        <Route exact path='/' element={<MainPage />} />
        <Route exact path='/reservation' element={<Reservation />} />
      </Routes>
      <Footer />
    </div>
    );
}

export default App;
