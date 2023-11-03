import React from 'react';
import './Styles/Menu.css';

const Menu = ({ title, price, image, description }) => {
  return (
    <>
      <section className='cardContainer'>
        <article>
          <img src={image} alt='specials' />
          <div className='title'>
            <h3 color='black'>{title}</h3>
            <h4 color='black'>{price}</h4>
          </div>
          <p>{description}</p>
          <div className='order'>
            <h6>
              <a href='./'>Order Delivery</a>
            </h6>
            <i class="fa fa-motorcycle"></i>
          </div>
        </article>
      </section>
    </>
  );
};

export default Menu;