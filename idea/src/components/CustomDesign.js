import '../styles/customdesign.css'
import CustomOne from '../assets/customdesign1.jpg'
import CustomTwo from '../assets/customdesign2.jpg'

function CustomDesign() {
    const customImage = [
      {
        title: "Özel Tasarım",
        description: "Modern ve Sade",
        src:  CustomOne ,
      },
      {
        title: "Özel Tasarım",
        description: "Şıklık ve Zerafet",
        src:  CustomTwo ,
      },
    ];
  return (
    <div className="customDesignContainer">
      {customImage.map((item, index) => (
        <div key={index} className="customDesignItem">
          <div className="overlay">
            <div className="title">{item.title}</div>
            <div className="description">{item.description}</div>
          </div>
          <img src={item.src} alt={item.src} />
        </div>
      ))}
    </div>
  );
}

export default CustomDesign;