import Tooltip from '@mui/material/Tooltip';
import React from 'react'
import { Link } from 'react-router-dom'

const MobleMenu = ({onButtonClick}) => {
  return (
    <div>
      <div className="md:hidden flex justify-between mobile-menu items-center">
          <Link
            to="/"
            className="py-4 px-3 text-md text-green-900  border-green-800 font-semibold  "
          >
            Home
          </Link>

          <Link
            to="/service"
            className="block text-xs py-2 px-1.5 rounded-md   hover:bg-green-800 hover: transition duration-300 "
          >
            ABOUT
          </Link>

          <Link
            to="/project"
            className="block text-xs py-2 px-1.5 rounded-md hover:bg-green-800 transition duration-300"
          >
            PROJECTS
          </Link>

          <Link
            to="/contact"
            className="block text-xs px-1.5 py-2 rounded-md hover:bg-green-800 transition duration-300"
          >
            CONTACT
        </Link>
        <Tooltip title="Download" arrow>
          <Link
            to="/"
            onClick={onButtonClick}
            className=" mx-2 rounded-md py-1 px-1.5 font-mono text-white bg-green-900 rounded hover:bg-green-800 transition duration-300"
          >
            RESUME 
          </Link>
          </Tooltip>
        </div>
    </div>
  )
}

export default MobleMenu
