import BodyOnePhoto from '../../assets/body1.jpg'
import BodyTwoPhoto from '../../assets/body2.jpg'
import BodyThreePhoto from '../../assets/body3.jpg'
import './styles/bodyone.css'
function BodyOne() {
    const imageAndDesc = [
      {
        src: BodyOnePhoto,
        alt:"body1",
        h1: "Yeni Yılın Simgesi Yılbaşı Ağacı",
        p: "Proin ac suscipit eros. Aliquam mi tellus, pellentesque a ex sit amet, malesuada porttitor leo.",
        button:"Ağacı Seç"
      },
      {
        src: BodyTwoPhoto,
        alt:"body2",
        h1: "En Güzel Yılbaşı Süsleri",
        p: "Proin ac suscipit eros. Aliquam mi tellus, pellentesque a ex sit amet, malesuada porttitor leo.",
        button:"Süsleri Topla"
      },
      {
        src: BodyThreePhoto,
        alt:"body3",
        h1: "Hediyeler Kutusuz Olmaz",
        p: "Proin ac suscipit eros. Aliquam mi tellus, pellentesque a ex sit amet, malesuada porttitor leo.",
        button:"Kutuları Hazırla"
      },
    ];
    return (
      <div className='bodyOneContainer'>
        {imageAndDesc.map((item, index) => (
          <div key={index} className='bodyOneItem'>
            <div>
              <img src={item.src} alt={item.alt}/>
            </div>
            <div className='bodyDetail'>
              <h1>{item.h1}</h1>
              <p>{item.p}</p>
              <button>{item.button}</button>
            </div>
          </div>
        ))}
      </div>
    );
}

export default BodyOne;