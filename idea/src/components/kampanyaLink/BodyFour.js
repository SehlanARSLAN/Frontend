import LeftPhoto from '../../assets/kampanyafourbody.jpg'
import RightPhoto from '../../assets/kampanyafourbodytwo.jpg'
import './styles/bodyfour.css'
function BodyFour() {
    return (
      <div className='bodyFourContain'>
        <div className='bodyFourLeftSide'>
          <div className='bodyFourImage'>
            <img src={LeftPhoto} alt="leftphoto" />
          </div>
          <div className='bodyFourInfo'>
            <h2>Maceraya Adım Atın</h2>
            <p>
              Cras in vestibulum purus, ac ornare tellus. Praesent dignissim
              purus est, id auctor arcu rutrum ac.
            </p>
            <button className="bodyFourButton">PS Konsollar</button>
          </div>
        </div>
        <div className='bodyFourRightSide'>
          <div className='bodyFourImage'>
            <img src={RightPhoto} alt="rightphoto" />
          </div>
          <div className='bodyFourInfo'>
            <h2>Aksiyon İçin Tasarlandı</h2>
            <p>
              Duis sollicitudin quam sit amet risus hendrerit, sed pharetra
              turpis venenatis. Nulla lobortis laoreet dui, at placerat lectus
              accumsan quis.
            </p>
            <button className="bodyFourButton">Xbox Konsollar</button>
          </div>
        </div>
      </div>
    );
}

export default BodyFour;