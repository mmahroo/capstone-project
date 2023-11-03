
import bannerPicture from "./Assets/bannerPicture.jpg";
import { Link } from "react-router-dom";

 function Hero() {
  return (
    <section className='hero'>
      <article>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>We are a family owned <br/>Mediterranean restaurant,<br/>focused on traditional recipes <br/> served with a modern twist.</p>
        <Link to="/Reservation">
        <button className='primaryButton'>Reserve a Table</button>
        </Link>
      </article>

      <div className="pic">
        <img className='pic' src={bannerPicture} alt='hero' />
      </div>
    </section>
  );
};

export default Hero;