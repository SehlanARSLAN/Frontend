import Bulletin from '../Bulletin';
import Footer from '../Footer';
import BodyFour from '../kampanyaLink/BodyFour';
import BodyOne from '../kampanyaLink/BodyOne';
import BodyThree from '../kampanyaLink/BodyThree';
import BodyTwo from '../kampanyaLink/BodyTwo';
import Countdown from '../kampanyaLink/Countdown';
import Header from '../kampanyaLink/Header';
function Kampanya() {
    return ( 
        <div>
        <Countdown/>
        <Header/>
        <BodyOne/>
        <BodyThree/>
        <BodyTwo/>
        <BodyFour/>
        <Bulletin/>
        <Footer/>
        </div> 
    );
}

export default Kampanya;