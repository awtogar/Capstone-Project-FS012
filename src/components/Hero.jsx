import '../styles/Hero.css';
import HeroMain from '../assets/images/Hero-main.png';

function Hero() {
    return (
        <section className="hero">
            <div className="hero__text-container">
                <div className="hero__text hero__text--primary">
                    <h2>THE MORE YOU</h2>
                    <h2>KNOW</h2>
                </div>
                <div className="hero__text hero__text--secondary">
                    <h2>THE MORE YOU</h2>
                    <h2>BE BETTER</h2>
                </div>
                <p className="hero__description">
                    Jelajahi berbagai macam destinasi wisata <br>
                    </br>untuk menambah pengetahuanmu
                </p>
                <div className="hero__cta-button">
                    <a href="#">LET’S GO</a>
                </div>
            </div>
            <img src={HeroMain} alt="Hero Main" className="hero__main" />
        </section>
    );
}

export default Hero;
