import '../styles/type.css'
import Backpack from '../assets/backpacks.jpg'
import Duffle from '../assets/dufflebags.jpg'
import Travel from '../assets/travelbags.jpg'
function Type() {
    const write = ["BACKPACKS","DUFFLEBAGS","TRAVELPACKS"]
    const imageUrls = [Backpack, Duffle, Travel];
    return (
      <div className="typeContain">
        {imageUrls.map((item, index) => (
            <div className='imageContain' key={index}>
                <img src={item} alt={write[index]}/>
                <div className='imageText'>{write[index]}</div>
            </div>
        ))}
      </div>
    );
}

export default Type;