
import Hero from "./Hero";
import './Styles/Hero.css';
import Main from "./Main";
import About from "./About";
import './Styles/About.css';
import Feedback from "./Feedback";

function MainPage() {
    return (
      <div>
        <Hero />
        <Main />
        <Feedback />
        <About />
      </div>
      );
  }
  
  export default MainPage;