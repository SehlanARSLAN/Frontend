import '../styles/info.css'
function Info() {
    return (
      <div className='infoContain'>
        <h1>JOIN OUR MAILING LIST</h1>
        <div>AND NEVER MISS AN UPDATE</div>
        <label>Enter your email here:</label>
        <input type="text" />
        <button>SUBSCRIBE NOW</button>
      </div>
    );
}

export default Info;