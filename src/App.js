import logo from './logo.svg';
import './App.css';
import sidvi from './image/eye-1686932_640.jpg' // saved image use process
import Header from './Header';
import { useState } from 'react';

function App() {
// let n =10;
let template = '';
let [count, setCount] = useState(1);
let [pshow, setPshow] = useState(false)

if (pshow) {
  template = <>
  <button className='border-l-orange-900 font-bold' onClick={() => setPshow(!pshow)}>Hide</button>
   <p>Welcome To Here</p>
   </>
}else{
  template =
  <button className='bg-gray-600 p-4' onClick={() => setPshow(!pshow)}>Show</button>
}


  let displayData = () => {

setCount(count+1)
//     n= n+1;
// console.log(n);
    // alert('Welcome to React')
  }

  let addData = (a, b) => {
    
console.log(a+b);
  }


  return (
    <div className="App">
{template}

<div>
      {count}
      </div>
      <button className='bg-blue-600 p-[10px] mr-4' onClick={()=> addData(20,35)}>Add Data</button>
<button className='bg-red-700 p-[10px]' onClick={displayData}>Click</button>

      <img src={sidvi}/>
      <img width={200} src='https://cdn.pixabay.com/photo/2015/11/26/16/28/vintage-1064142_640.png'/>
      <Header/>
      <h1 className='text-[80px] text-red-400 font-bold'>Welcome to Tailwind</h1>
    </div>
  );
}

export default App;
