import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPages from './pages/LandingPage';
import CityDetailPage from './pages/CityDetailPage';
import MainPage from './pages/MainPage';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPages />} />
        <Route path="/city" element={<MainPage />} />
        <Route path="/city/:cityId/detail" element={<CityDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
