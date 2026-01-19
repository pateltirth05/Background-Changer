import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Password from './components/Password'

function App() {
  const [color,setColor]=useState('')
//  localStorage.setItem('user','Tirth')
//let data=localStorage.getItem('user')
  return (
    <>
    <div className='w-full h-screen duration-200' style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-full py-1 px-1'>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:'red'}} onClick={()=>setColor('red')}>Red</button>
           <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:'green'}} onClick={()=>setColor('green')}>Green</button>
            <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:'blue'}} onClick={()=>setColor('blue')}>Blue</button>
             <button className='outline-none px-4 pt-1 rounded-full text-white shadow-lg' style={{backgroundColor:'yellow'}} onClick={()=>setColor('yellow')}>Yellow</button>
              <button className='outline-none px-4 pt-1 rounded-full text-white shadow-lg' style={{backgroundColor:'brown'}} onClick={()=>setColor('brown')}>Brown</button>
              <button className='outline-none px-4 pt-1 rounded-full text-white shadow-lg' style={{backgroundColor:'black'}} onClick={()=>setColor('black')}>Black</button>
              <button className='outline-none px-4 pt-1 rounded-full text-white shadow-lg' style={{backgroundColor:'pink'}} onClick={()=>setColor('pink')}>Pink</button>
        </div>
      </div>

    </div> 
    {/* <Password/>
    <br></br>
    <h1>{data}</h1> */}
    </>
  )
}

export default App
