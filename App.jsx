import React, { useRef, useState } from 'react';
import './App.css'
import chatGPTlogo from './assets/ChatGPT-Logo.png'

import TwiInput from './components/TwiInput';
import AudioRecorder from "./components/new_recorder";



function App() {

  const [audioData, setAudioData] = useState(" ");

  return (
    <>


    <div>
        <img src={chatGPTlogo} className="logo react" alt="React logo" />
    </div>
    <h1 className="header">Twi on GPT</h1>
  
  <div><AudioRecorder setAudioData={setAudioData}></AudioRecorder> </div>    

    <div className='userinput'><TwiInput audioData ={audioData}></TwiInput></div> 

  </>
  );
}
export default App


 
