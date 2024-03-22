import React from 'react'
import '../styles/body.css'
import Fotom from '../assets/profilfotosu.jpeg'
import { useNavigate } from 'react-router-dom';

export const Body = () => {
  let navigate = useNavigate();

  function handleClick() {
    navigate('');
  }
  return (

    <div className="bodyContainer">
      <div className="leftSide">
        <img src={Fotom} alt="fotom" />
      </div>
      <div className="rightSide">
        <h1 className='title'>Hakkımda</h1>
        <div className='about'>Merhaba,Ben Sehlan, <br/>
        Konya Necmettin Erbakan Üniversitesi Seydişehir Ahmet Cengiz Mühendislik Fakültesi Bilgisayar Mühendisliği bölümünden mezun oldum.
        Frontend alanında kendimi geliştirmeye çalışıyorum.
        </div>
        <button className='bttn' onClick={handleClick}>Beceriler</button>
      </div>
      
    </div>

  );
}
