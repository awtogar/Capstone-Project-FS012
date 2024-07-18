import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPages from './pages/LandingPage';
import CityDetail from './pages/DetailCityPage';
import MainPage from './pages/MainPage';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPages />} />
        <Route path="/city" element={<MainPage />} />
        <Route path="/city/:cityId/detail" element={<CityDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
