import './styles/bodythree.css'
import Monopoly from '../../assets/kampanyamonopoly.jpg'
function BodyThree() {
    return (
      <div className='bodyThreeContain'>
        <div className='bodyThreeContainTwo'>
          <div className='bodyThreeLeft'>
            <div className='bodyThreeImage'>
              <img src={Monopoly} alt="monopoly" />
            </div>
          </div>
          <div className='bodyThreeRight'>
            <div className='bodyThreeInfo'>
              <h2>Kutu Oyunlarıyla Kesintisiz Eğlence</h2>
              <p>
                Quisque convallis lectus at ante bibendum laoreet. Nam placerat
                ipsum eu neque luctus porta. Pellentesque ultrices ante quis
                malesuada tempus.
              </p>
              <button>En Popüler Kutular</button>
            </div>
          </div>
        </div>
      </div>
    );
}

export default BodyThree;