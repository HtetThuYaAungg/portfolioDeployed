import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MobleMenu from "../components/MobleMenu";
import ToggleBtn from "../components/ToggleBtn";
import Tooltip from '@mui/material/Tooltip';

const Nav = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const btn = document.querySelector("button.mobile-menu-button");
    const menu = document.querySelector(".mobile-menu");

    btn.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    });
  }, []);

  const clickHandler = (event) => {
    if (event.detail == 3) {
      navigate("/login");
    }
  };

  // Function will execute on click of button
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("sample.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "sample.pdf";
        alink.click();
      });
    });
  };
  return (
    <>
      <nav className="bg-white shadow-lg Nav">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-7">
              <div>
                <div className="flex items-center py-4 px-2">
                  <img
                    onClick={clickHandler}
                    id="tripple"
                    src="/pp1.jpg"
                    alt="Logo"
                    className="h-8 w-8 mr-2 rounded-full"
                  />
                  <span className="font-semibold text-gray-500 text-lg hover:text-green-900 ">
                    HTET THU YA
                  </span>
                </div>
              </div>
              {/* <!-- Primary Navbar items --> */}
              <div className="hidden md:flex items-center space-x-1 ml-2 ">
                <ul>
                  <li>
                    <Link
                      to="/"
                      className="py-4 px-2 text-green-900 border-b-2 border-green-900 font-semibold "
                    >
                      HOME
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/service"
                      className="py-4 px-2 text-gray-500 font-semibold  transition duration-300"
                    >
                      ABOUT
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/project"
                      className="py-4 px-2 text-gray-500 font-semibold transition duration-300"
                    >
                      PROJECTS
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contact"
                      className="py-4 px-2 text-gray-500 font-semibold  transition duration-300"
                    >
                      CONTACT
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* <!-- Secondary Navbar items --> */}
            <div className="hidden md:flex items-center space-x-3 ml-2 ">
            <Tooltip title="Download" placement="right" arrow>
          <Link
            to="/"
            onClick={onButtonClick}
            className=" mx-2 rounded-md py-1 px-1.5 font-mono text-white bg-green-900 rounded hover:bg-green-800 transition duration-300"
          >
            RESUME 
          </Link>
          </Tooltip>
            </div>
            {/* <!-- Mobile menu button --> */}
            <div className="md:hidden flex items-center">
              <ToggleBtn cusClassName={"outline-none mobile-menu-button"} />
            </div>
          </div>
        </div>
        {/* <!-- mobile menu --> */}
        <MobleMenu onButtonClick={onButtonClick} />
      </nav>
    </>
  );
};

export default Nav;
