import { useState } from 'react'

import './App.css'

function App() {
  const [color, setColor] = useState("black")

  return (
    
    <div className='w-full h-screen duration-200' style={{backgroundColor:color}}>
            <div className="fixed flex flex-wrapped justify-center bottom-12 inset-x-0 px-2"> 
            
             <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py2 rounded-xl">

              <button className='outline-none px-4 px-1 rounded-full text-white shadow-lg'
               style={{backgroundColor:"red"}} onClick={()=>{
                setColor("red")
               }}
              >Red</button>
              <button className='outline-none px-4 px-1 rounded-full text-white shadow-lg'
               style={{backgroundColor:"grey"}} onClick={()=>{
                setColor("grey")
               }}
              >Grey</button>
              <button className='outline-none px-4 px-1 rounded-full text-white shadow-lg'

               style={{backgroundColor:"green"}}
               onClick={()=>{
                setColor("green")
               }}
              >Green</button>
              <button className='outline-none px-4 px-1 rounded-full text-white shadow-lg'
               style={{backgroundColor:"blue"}} onClick={()=>{
                setColor("blue")
               }}
              >Blue</button>
              <button className='outline-none px-4 px-1 rounded-full text-white shadow-lg'
               style={{backgroundColor:"yellow"}} onClick={()=>{
                setColor("yellow")
               }}
              >Yellow</button>

             </div>
            </div>
    </div>
  )
   
  
}

export default App
