import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='Home'>
      <section className="home-hero">

      <div className="home-hero__content">
        <h1 className="heading-primary">Hey,I'm Htet Thu Ya Aung</h1>
        <div className="home-hero__info">
          <p className="text-primary">
          A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product.
          </p>
        </div>
        <div className="home-hero__cta">
          <Link to="/project" className="btn btn--bg">Projects</Link>
        </div>
      </div>
      <div className="home-hero__socials">
        <div className="home-hero__social">
          <a href="https://github.com/HtetThuYaAungg" className="home-hero__social-icon-link">
            <img
              src="/github-ico.png"
              alt="icon"
              className="home-hero__social-icon"
            />
          </a>
        </div>
        <div className="home-hero__social">
          <a href="https://www.linkedin.com/in/htet-thu-ya-a411471b5" className="home-hero__social-icon-link">
            <img
              src="/linkedin-ico.png"
              alt="icon"
              className="home-hero__social-icon"
            />
          </a>
        </div>
        <div className="home-hero__social">
          <a href="#" className="home-hero__social-icon-link">
            <img
              src="/twitter-ico.png"
              alt="icon"
              className="home-hero__social-icon"
            />
          </a>
        </div>
        <div className="home-hero__social">
          <a href="https://www.youtube.com/@mghtetthuya1200" className="home-hero__social-icon-link">
            <img
              src="/yt-ico.png"
              alt="icon"
              className="home-hero__social-icon"
            />
          </a>
        </div>
        <div className="home-hero__social">
          <a
            href="https://instagram.com/htet_thu_ya?igshid=NTE5MzUyOTU="
            className="home-hero__social-icon-link home-hero__social-icon-link--bd-none"
          >
            <img
              src="/insta-ico.png"
              alt="icon"
              className="home-hero__social-icon"
            />
          </a>
        </div>
      </div>
    
    </section>
    </div>
  )
}

export default Home
