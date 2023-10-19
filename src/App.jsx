
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './Login'
import Register from './Register'

function App() {
  

  return (
    <div className='text-white h-[100vh] flex justify-center items-center bg-cover' style={{ 'background-image': "url('../src/images/bg.jpg') "}}>
      <Routes>
        <Route path='login' element={<Login/>}/>
        <Route path='Register' element={<Register/>}/>
      </Routes>
    </div>
  )
}

export default App
