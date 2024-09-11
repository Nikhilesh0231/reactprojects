import { useState } from 'react';
import './App.css';
import Header from './Header';
import weblogo from './chetwoode-hall-indian.jpg'

function App() {
  let template = '';
  let [count, setcount] = useState(1);

  let [pshow, setpshow] = useState(false);

  let displayData = () => {
    setcount(count + 1)
    // alert("Welcome to NTS");
  }
  let addData = (a, b) => {
    alert(a + b);
  }
  if (pshow) {
    template = <>
      <p className='text-pink-950 font-bold text-6xl'>Welcome to era of coding and live the life</p>
      <button className='bg-[red] p-[10px] ml-1' onClick={() =>  setpshow(!pshow) }>HidePara</button>
    </>

  }
  else {
    template = <button className='bg-[red] p-[10px] ml-1' onClick={() =>  setpshow(!pshow) }>ShowPara</button>
  }



  return (
    <div className="App">
      {template}
      <h1 className='bg-[Green] text-red-600 text-lg'>{count}</h1>
      <button className='bg-[red] p-[10px] mr-4' onClick={() => addData(2, 3)}>Add Data</button>
      <button className='bg-[red] p-[10px]' onClick={displayData}>Save</button>


      <img width={200} src={weblogo} alt="" />
      <Header />
      <h1 className='text-[140px] text-red-700 font-bold'>Welcome to NTS</h1>
    </div>
  );
}

export default App;

let Card = ()=>{
  return( 
    <h1>Welcome</h1>
  )
}
