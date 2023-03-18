import React from 'react'
import { Link } from 'react-router-dom'
import {ImSpinner2} from 'react-icons/im'

const Missing = () => {
  return (
    <main className='Missing'>
      <section className="home-hero">
      <div class="home-hero__content">
                  <h1 class="heading-primary">OOPS!!!</h1>
                  <div class="home-hero__info">
                  <p className='text-primary'>Well, that's disappointing</p>
                      <p className='text-primary border-b-2'><Link to='/'>Vist Our HomePage</Link></p> 
                      
                  </div>
                  
              </div>
              </section>
    </main>
  )
}

export default Missing