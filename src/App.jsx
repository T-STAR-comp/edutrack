import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

//import pages
import Landing from './LandingPage/landing'
import Contact from './staticPages/Contact'
import About from './staticPages/About'
import HelpCenter from './staticPages/HelpCenter'
import PrivacyPolicy from './staticPages/PrivacyPolicy'
import Notfound from './Notfound/404'
import Auth from './Auth/auth'
import ParentDash from './parentDash/dash1'
import MainDashBoard from './mainDash/miandash'

function App() {

  return (
    <>
      <Routes>
        <Route path='*' element={<Notfound/>} />
        <Route path='/' element={<Landing/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/help' element={<HelpCenter/>} />
        <Route path='/privacy' element={<PrivacyPolicy/>} />
        <Route path='/Auth' element={<Auth/>} />
        <Route path='/dashboard' element={<ParentDash/>} />
        <Route path='/maindash' element={<MainDashBoard/>} />
      </Routes>
    </>
  )
}

export default App;
