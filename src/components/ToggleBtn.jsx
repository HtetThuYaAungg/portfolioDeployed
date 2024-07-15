import React from 'react'

const ToggleBtn = ({cusOnClick,cusClassName}) => {
  return (
    <div>
       <div className=" flex items-center">
              <button className={cusClassName} onClick={cusOnClick}>
                <svg
                  className=" w-6 h-6 text-gray-500 hover:text-green-900 "
                  x-show="!showMenu"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
        </div>
    </div>
  )
}

export default ToggleBtn
