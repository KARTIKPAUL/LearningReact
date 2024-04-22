import { useState } from 'react'
import './App.css'

function App() {
  const [color,setColor] = useState('blue')
  return (
   <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
    <div className='fixed flex flex-wrap justify-center bottom-12 px-4 inset-x-0'>
      <div className='flex flex-wrap justify-center gap-3 bg-white px-3 py-2 rounded-2xl shadow-lg'>
        
        <button className='outline-none px-4 py-1 rounded-full shadow-lg bg-red-600 text-2xl font-bold' onClick={() => setColor("red")}>Red</button>

        <button className='outline-none px-4 py-1 rounded-full shadow-lg bg-orange-400 text-2xl font-bold' onClick={() => setColor("orange")}>Oragne</button>

        <button className='outline-none px-4 py-1 rounded-full shadow-lg bg-yellow-500 text-2xl font-bold' onClick={() => setColor("yellow")}>Yellow</button>

        <button className='outline-none px-4 py-1 rounded-full shadow-lg bg-green-500 text-2xl font-bold' onClick={() => setColor("green")} >Green</button>

        <button className='outline-none px-4 py-1 rounded-full shadow-lg bg-blue-600 text-2xl font-bold' onClick={() => setColor("blue")} >Blue</button>

        <button className='outline-none px-4 py-1 rounded-full shadow-lg bg-indigo-500 text-2xl font-bold' onClick={() => setColor("indigo")} >Indigo</button>

        <button className='outline-none px-4 py-1 rounded-full shadow-lg bg-violet-600 text-2xl font-bold' onClick={() => setColor("violet")} >Violet</button>
        
      </div>
    </div>
    
   </div>
  )
}

export default App
