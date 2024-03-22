import Advice from "./Advice";
import BestSelling from "./BestSelling";
import Bulletin from "./Bulletin";
import CustomDesign from "./CustomDesign";
import ShowCase from "./ShowCase";
import Slider from "./Slider";

function Body() {
    return ( 
        <div>
        <Slider/>
        <CustomDesign/>
        <BestSelling/>
        <Advice/>
        <ShowCase/>
        <Bulletin/>
        </div> 
        );
}

export default Body;