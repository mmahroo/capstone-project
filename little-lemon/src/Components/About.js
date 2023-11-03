import React from 'react';
import './Styles/About.css';
import imageAB from './Assets/AB.png';
function About(){
  return (
    <section className='aboutContainer' id='about-section'>
      <div>
        <h2 id='heading'>Little Lemon</h2>
        <h3>Chicago</h3>
        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do ametsint. Velit officia consequat duis enim velit mollit. Exercitationveniam consequat sunt nostrud amet. Amet minim mollit non deseruntullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit.</p>
      </div>
      <div>
        <img id='imageAB' src={imageAB} alt='about-image1'  width={400} />
      </div>
    </section>
  );
};

export default About;