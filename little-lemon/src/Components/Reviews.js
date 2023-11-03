
import stars from '../Components/Assets/5stars.png';





const Reviews = ({ name, picture, review }) => {
    return (
      <section  className='reviewsContainer'>
        <article>
          <div className='pictures'>
            <img src={stars} alt='review' width={100} />
            <img className='avatar' src={picture} alt='review' />
            <h4>{name}</h4>
          </div>
          <p>{review}</p>
        </article>
      </section>
    );
  };

export default Reviews;