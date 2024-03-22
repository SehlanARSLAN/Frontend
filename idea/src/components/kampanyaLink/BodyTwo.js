import TV from '../../assets/bodyTwo.jpg'
import './styles/bodytwo.css'
function BodyTwo() {
    return (
      <div className="bodyTwoContainer">
        <div className='bodyTwoBackground'>
          <div className="bodyTwoLeft">
            <div>
              <img src={TV} alt="tv" />
            </div>
          </div>
          <div className="bodyTwoRight">
            <h1>LED Teknolojisiyle Yeni Boyutlara Kapı Açın</h1>
            <p>
              Donec et velit mi. Suspendisse egestas, est vel pharetra congue,
              nisi felis suscipit justo, eget ultricies augue libero vel sapien.
              Nullam tincidunt mi sit amet consequat volutpat. In iaculis ligula
              quis purus mollis tempus. Etiam dictum malesuada ex, id viverra
              sem porttitor eu.
              <br /><br/> Proin condimentum eros id placerat malesuada. Ut nisi
              ipsum, pellentesque eu ligula eu, volutpat euismod orci.
            </p>
            <button>LED TV'ler</button>
          </div>
        </div>
      </div>
    );
}

export default BodyTwo;