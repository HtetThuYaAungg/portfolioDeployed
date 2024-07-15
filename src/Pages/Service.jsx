import React, { useState } from "react";
import NavigationIcon from "@mui/icons-material/Navigation";
import Popup from "./Popup";
import { Fab, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
import { green } from "@mui/material/colors";

const Service = (props) => {
  const { window } = props;

  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <div className="Service">
      <section className="home-hero">
        <div className="home-hero__content ">
          <h1 className="heading-primary">About Me</h1>
          <div className="home-hero__info ">
            <div className=" about__content-main mb-2">
              <p>Get to know me!</p>
              <div class="about__content-details-para">
                Hey! It's&nbsp;
                <strong>Htet Thu Ya Aung&nbsp;</strong>
                and I'm a <strong> MERN Stack Developer </strong> located in
                Yangon, Myanmar. I've experience in building and developing
                <strong> Web application </strong>
                using MongoDB, ExpressJS, ReactJS and NodeJS.
                I've experience with <strong> HTML-5, CSS, JavaScript, PHP, React, Laravel and Angular </strong>
                for <strong>Front-End Development </strong>and  MySql, MongoDB, NodeJS and ExpressJS for <strong>Back-End Development.</strong>

              </div>
              <div class="about__content-details-para">
              I've also experience with Figma, Excel and LinuxOS. You will find a showcase of my past projects and technical skills on my Protfolio.
              Feel free to
                <strong> contact</strong> me here.
              </div>
            </div>
            <div className=" lg:float-right  lg:px-96 ">
              <Link to="/contact" className="btn btn--bg">
                Contact
              </Link>
              <br />
            </div>
          </div>
        </div>
        <Popup
          window={window}
          open={open}
          setOpen={setOpen}
          toggleDrawer={toggleDrawer}
        />

        <div className=" float-right pr-4 relative">
          <div className="">
            <div className="lg:pt-96 hidden lg:block">
              <Tooltip title="Tools" placement="top" arrow>
                <Fab aria-label="add" onClick={toggleDrawer(true)}>
                  <NavigationIcon sx={{color:green[900]}}/>
                </Fab>
              </Tooltip>
            </div>
          </div>
        </div>

        
        
      </section>
     
    </div>
  );
};

export default Service;
