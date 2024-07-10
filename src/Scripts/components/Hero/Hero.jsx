import HeroMain from '../../../assets/images/hero-main.png';

function Hero() {
    return (
        <section className="mx-auto flex flex-col md:flex-row md:items-center md:justify-center">
            <img 
                className="px-6 order-1 md:order-2 sm:max-w-full md:max-w-3xl md:pl-12" 
                alt="Hero Main" 
                src={HeroMain}
            />
            <div className="pb-8 order-2 md:order-1 md:flex-col md:pr-4">
                <div className='text-center md:max-lg:px-8'>
                    <h2 className='text-m sm:text-l md:text-xl font-medium'>THE MORE</h2>
                    <h2 className='text-xl sm:text-3xl md:text-7xl font-black'>YOU KNOW</h2>
                </div>
                <div className='text-center md:max-lg:px-8'>
                    <h2 className='text-m sm:text-l md:text-xl font-medium'>THE MORE</h2>
                    <h2 className='text-xl sm:text-3xl md:text-7xl font-black md:bg-gradient-to-r md:from-amber-500 md:to-pink-500 md:bg-clip-text md:text-transparent'>YOU BETTER</h2>
                </div>
                <div className="text-center py-2 md:max-lg:px-8">
                    <p>Explore More!</p>
                </div>
                <div className="text-center mt-2">
                    <a href="#MainContent" className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-blue-500 text-white rounded-full">Let&apos;s Go</a>
                </div>
            </div>
        </section>
    );
}

export default Hero;
