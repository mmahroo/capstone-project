import Reviews from "./Reviews";
import './Styles/Reviews.css';
import { testimonials } from './Testimonials';

const Feedback= () => {
    return (
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
    )
}

export default Feedback;

