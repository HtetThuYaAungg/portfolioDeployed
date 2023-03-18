import React from 'react'

const Footer = () => {
    const today = new Date();

    return (
      
       <footer className="bg-white drop-shadow-2xl Footer">
       <div className="max-w-6xl mx-auto px-4">
         <div className="flex justify-between">
           <div className="flex space-x-7">
           <p className='text-green-900 hover:text-green-700 '>Copyright &copy; {today.getFullYear()}</p>
                </div>
              </div>
            </div>
          </footer>
      
          )
}

export default Footer
