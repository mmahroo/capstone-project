import Navigation from "./Components/Navigation";
import './Components/Styles/Navigation.css';
import Hero from "./Components/Hero";
import './Components/Styles/Hero.css';
import Menu from "./Components/Menu";
import './Components/Styles/Menu.css';
import Reviews from "./Components/Reviews";
import './Components/Styles/Reviews.css';
import { testimonials } from './Components/Testimonials';
import { SPECIALS } from './Components/Specials';
import About from "./Components/About";
import './Components/Styles/About.css';
import Footer from "./Components/Footer";
import "./App.css";
import Reservation from "./Components/Reservation";
import { Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Navigation />
      <section id="home">
        <Hero />
      </section>

      <section  id = 'menu-section' className='specialsTitle'>
        <h1>This Week Specials!</h1>
        <Link to= './orders'>
        <button id='menuButton'>Online Menu</button>
        </Link>
      </section>

      <section className='specialSection'>
        {SPECIALS.map((special) => (
          <article key={special.id}>
            <Menu
                title={special.title}
                price={special.price}
                description={special.description}
                image={special.image}
              />
            </article>
          ))}
          </section>

      <section id='testimonials-section' className='testimonialSection'>
        {testimonials.map((review) => (
          <article key={review.id}>
            <Reviews
              name={review.name}
              picture={review.image}
              review={review.review}
              stars={review.stars}
            />
          </article>
        ))}
      </section>
      <section id="about-section">
        <About />
      </section>
      <Footer />
    </div>
    );
}

export default App;
