import SectionBg from './assets/images/images-1.webp';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import CityList from './components/List/CityList'; // Correct import statement

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="min-h-screen bg-gray-100">
        <section id="section-1" className="relative bg-cover bg-center h-96 lg:h-72" style={{ backgroundImage: `url(${SectionBg})` }}>
          <div className="container mx-auto flex items-center justify-center h-full">
            <div className="text-center text-white">
              <h1 className="text-4xl lg:text-6xl font-bold mb-4">Epic Indonesia</h1>
              <p className="text-xl lg:text-2xl mb-8">Explore the beauty of Indonesian cities</p>
            </div>
          </div>
        </section>
        <section id="products" className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8">Explore The Cities</h2>
            <CityList />
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
