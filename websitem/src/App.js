import './App.css';
import { Header } from './components/Header';
import { Body } from './components/Body'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="App">
      <div className='overlay'>
        <Header />
        <Body/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
