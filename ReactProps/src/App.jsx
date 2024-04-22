import { useState } from 'react'
import Card from "./Components/Card"
import Footer from './Components/Foooter'
import './App.css'

function App() {
  return (
    <>
    <h1 className='bg-green-400 rounded px-4 py-2 hover:cursor-pointer hover:bg-white hover:text-black font-bold'>Vite And Tailwind</h1>
    <Card userName = "Kartik" imageSrc="https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=600"/>
    <Card userName = "kamalesh" post="SDE"/>
    <Card />
    <Footer />
    </>
  )
}

export default App
