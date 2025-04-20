import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

//import pages
import Landing from './LandingPage/landing'
import ContactPage from './contact/contact'
import Notfound from './Notfound/404'
import Auth from './Auth/auth'
import ParentDash from './parentDash/dash1'

function App() {

  return (
    <>
      <Routes>
        <Route path='*' element={<Notfound/>} />
        <Route path='/' element={<Landing/>} />
        <Route path='/contactUs' element={<ContactPage/>} />
        <Route path='/Auth' element={<Auth/>} />\
        <Route path='/dashboard' element={<ParentDash/>} />
      </Routes>
    </>
  )
}

export default App;
