import React from 'react'
import './Footer.css'
import {AiFillGithub, AiFillLinkedin, AiFillTwitterCircle} from 'react-icons/ai'

const Footer = () => {
  return (
    // <footer className='footer'>
    //     <div class="details">
    //         <p>Created by <a href="https://www.linkedin.com/in/anirban-dutta-6a2bb317a/" target="_blank" rel="noreferrer">@Anirban Dutta</a></p>
    //     </div>
    //     <div class="icons">
    //         <AiFillGithub />
    //         <AiFillLinkedin />
    //     </div>
    // </footer>

    <footer className='main-footer'>
      <div className='footer-links'>
        <a
          target="blank"
          href='https://twitter.com/Hustl3r05'
 rel="noreferrer"
        >
          <AiFillTwitterCircle />
        </a>
        <a
          target="blank"
          href='https://github.com/sonai99'
        >
          <AiFillGithub />
        </a>
        <a
          target="blank"
          href='https://www.linkedin.com/in/anirban-dutta-6a2bb317a/'
        >
          <AiFillLinkedin />
        </a>
      </div>
      <div className='footer-text'>Created by <a href="https://www.linkedin.com/in/anirban-dutta-6a2bb317a/" target="_blank" rel="noreferrer">@Anirban Dutta</a></div>
    </footer>
    
  )
}

export default Footer