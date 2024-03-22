import '../styles/body.css';
import About from './About';
import Contact from './Contact';
import Info from './Info';
import News from './News';
import Sale from './Sale';
import Type from './Type';

function Body() {
    return (
      <div className="body">
        <div className="background">
          <h1>PLAN YOUR ADVENTURE</h1>
          <button>SHOP NOW</button>
        </div>
        <News/>
        <Type/>
        <Sale/>
        <About/>
        <Contact/>
        <Info/>
      </div>
    );
}

export default Body;