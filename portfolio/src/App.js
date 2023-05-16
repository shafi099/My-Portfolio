import profilepic from './profilepic.jpg';
import './App.css';

function App() {
  return (<>
    <div className='topnav'>
      <span className='name'>Shafi Shaik</span>
      <span className='navlinks'>
        <span>About</span>
        <span>Projects</span>
        <span>Skills</span>
        <span>Contacts</span>
      </span>
    </div>
    <div className='about'>
    <span className='profilepicportion'>
        <img src={profilepic} alt='profilepics' />
      </span>
      <span className='abouttext'>
        <span className="aboutname">I'm Shafi Shaik,</span><span className='aboutsum'>Highly motivated and talented B.Tech graduate with a keen interest in web development.<br />
          Possessing a solid foundation in programming concepts and a passion for creating innovative<br />
          and user-friendly websites.
        </span></span>
    </div>

    <div className='introbox'> 
      <span className='introtitle'>About</span>
      <span className='introtext'>
        Btech graduate passion towards web development. Self taught MERN Stack developer built some projects using web developing skills.
        I thrive in collaborative environments and embrace the opportunity to expand my knowledge. I am always seeking new challenges that allow me to utilize my coding skills to make a difference in people's lives. Please don't hesitate to reach out to me for any work or suggestions. I am eager to explore new opportunities and contribute to meaningful projects.
      </span>
    </div>

    <div className='introbox'>
      <span className='introtitle'>Projects</span>
      <span className='introtext'>Check out some of my work right here</span>
    </div>
  </>);
}

export default App;
