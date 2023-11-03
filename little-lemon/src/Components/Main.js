import Menu from "./Menu";
import './Styles/Menu.css';
import { Link } from "react-router-dom";
import { SPECIALS } from './Specials';


const Main = () => {
    return (
        <>
        <section  id = 'menu-section' className='specialsTitle'>
            <h1>This Week Specials!</h1>
            <Link to="/" >
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
        </>
    )
}

export default Main;
