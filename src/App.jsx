import { useState } from 'react';
import './App.css'
import BackgroundEffect from './components/BackgroundEffect/BackgroundEffect';
import Header from './components/Headers/Header';
import InfoResult from './components/InfoResult/InfoResult';
import InputForm from './components/InputForm/InputForm';
import MouseGlow from './components/MouseGlow/MouseGlow';
import Result from './components/Result/Result';

export default function App() {
  const [data, SetData] = useState(null);

  return (
    <>
      <BackgroundEffect/>
      <Header/>
      <MouseGlow/>
      <div className='flex flex-col items-center justify-center h-screen'>
        <Result {...data}/>
        <InfoResult {...data}/>
        <InputForm onCalculate={(data) => SetData(data)}/>
      </div>
    </>
  )
}