import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../src/components/Navbar';
import Home from '../src/Pages/Home';
import Register from './Pages/Register';
import Login from './Pages/Login';
import axios from 'axios';
import {Toaster} from 'react-hot-toast'
import { UserContextProvider } from '../context/userContext';
import Videobg from './assets/bg-video2.mp4'

import Dashboard from './Pages/Dashboard';
import Existmodel from './Pages/Existmodel';
import PdfViewer from './Pages/PdfViewer';
import Your_Models from './Pages/Your_Models';
import FeedbackForm from './Pages/FeedbackForm';
import DeveloperRegister from './Pages/DeveloperRegister';
import DeveloperLogin from './Pages/DeveloperLogin';
import SliderData from './Pages/SliderData';
import EmailForm from './Pages/email';

axios.defaults.baseURL='http://localhost:8000'
axios.defaults.withCredentials=true

function App() {
  <div>
    {/* <div className="video-container">
        <video autoPlay loop muted>
          <source src={Videobg} type="video/mp4" />
        </video>
      </div> */}
  </div>
  

  return (
    
    <UserContextProvider>
     
     <Toaster position='bottom-right' toastOptions={{duration:2000}}/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/existmodel' element ={<Existmodel/>}/>
      <Route path='/pdfviewer' element ={<PdfViewer/>}/>
      <Route path='/Your_Models' element ={<Your_Models/>}/>
      <Route path='/FeedbackForm' element ={<FeedbackForm/>}/>
      <Route path='/DeveloperRegister' element ={<DeveloperRegister/>}/>
      <Route path='/DeveloperLogin' element ={<DeveloperLogin/>}/>
      <Route path='/SliderData' element ={<SliderData/>}/>
      <Route path='/Emailform' element ={<EmailForm/>}/>

    </Routes> 
     
    </UserContextProvider>
  )
}

export default App
