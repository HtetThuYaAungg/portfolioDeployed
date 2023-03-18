
import React from 'react'
import Start from './Start'
import useWindowSize from './hooks/useWindowSize';
import UnSupported from './Pages/UnSupported';

const App = () => {

  const { width } = useWindowSize();

  return (
    <div className='App'>
      
      {width < 360 ? <UnSupported/> :
         <Start /> 
      }
     
    </div>
  )
}

export default App
