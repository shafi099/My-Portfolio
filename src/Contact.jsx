import React from 'react';
import linkedin from'./linkedin.png';
import github from './github.png';
import mail from './mail.png';
import shafi_resume from './shafi_resume.pdf'
import resume from './resume.png'
const Contact = () => {
  return (
    <>
       <div className="contactportion">
  <a href="mailto:shaikshafieluru@gmail.com"><img src={mail} className='contacticon' alt="Gmail_icon"></img></a>
  <a href="https://www.linkedin.com/in/shaik-shafi-eluru/"><img src={linkedin} className='contacticon' alt="linkedIn_icon"></img></a>
  <a href="https://github.com/shafi099"><img src={github} className='contacticon' alt="github_icon"></img></a>
  <a href={shafi_resume} download="shafi_resume"><img src={resume} className='contacticon' alt="github_icon"></img></a>
  </div>
    </>
  );
}

export default Contact;

