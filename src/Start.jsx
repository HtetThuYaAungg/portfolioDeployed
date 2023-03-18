import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { UserProvider } from './contexts/user.context'
import About from './Pages/About'
import AddProject from './Pages/AddProject'
import Contact from './Pages/Contact'
import Footer from './Pages/Footer'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Missing from './Pages/Missing'
import Nav from './Pages/Nav'
import PrivateRoute from './Pages/PrivateRoute.page'
import Project from './Pages/Project'
import Service from './Pages/Service'
import Signup from './Pages/Signup'

const Start = () => {
  return (
    <div className='App'>
      <Nav />
      <UserProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/service' element={<Service />} />
          <Route path='/project' element={<Project />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
     
          <Route path='*' element={<Missing />} />

          <Route element={<PrivateRoute />}>
            <Route exact path="/add" element={<AddProject />} />
          </Route>
        
        </Routes>
      </UserProvider>
      <Footer />
    </div>
  )
}

export default Start
