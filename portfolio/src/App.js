import profilepic from './profilepic.jpg';
import cointracker from './cointracker.jpg'
import { Link as AnchorLink, animateScroll as scroll } from 'react-scroll';

// import AnchorLink from 'react-anchor-link-smooth-scroll';
import './App.css';
import Skillcomp from './skillcomp';
import Projectcomp from './projectcomp';
import yourgenie from './yourgenie.jpg';
import cinepass from './cinepass.jpg';
import moviewikki from './moviewikki.jpg';
import reactpic from './react.png';
import javascript from './javascript.png';
import mongodb from './mongodb.png';
import sql from './sql.png'
import nodejs from './node.png';
import python from './python.png';
import html from './html.png';
import css from './css.png'
import C from './C.png';
import photoshop from './photoshop.png'
import Contact from './Contact'


function App() {
  // const scrollToTop = () => {
  //   scroll.scrollToTop();
  // };
  return (<>
      <div className="topnav">
      <span className="name">Shafi Shaik</span>
      <span className="navlinks">
        <AnchorLink to="about" smooth={true} spy={true} offset={-80} duration={500} className="custom-link">
          <span>About</span>
        </AnchorLink>
        <AnchorLink to="projects" smooth={true} spy={true} offset={-80} duration={500} className="custom-link">
          <span>Projects</span>
        </AnchorLink>
        <AnchorLink to="skills" smooth={true} spy={true} offset={-80} duration={500} className="custom-link">
          <span>Skills</span>
        </AnchorLink>
        <AnchorLink to="contact" smooth={true} spy={true} offset={-0} duration={500} className="custom-link">
          <span>Contact</span>
        </AnchorLink>
      </span>
    </div>
    {/* <div className='fixed'>
      <span>s</span>
      <span>s</span>
      <span>s</span>
    </div> */}
    <Contact/>
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

    <div className='introbox' id='about'>
      <span className='introtitle'>About</span>
      <span className='introtext'>
        Btech graduate passion towards web development. Self taught MERN Stack developer built some projects using web developing skills.
        I thrive in collaborative environments and embrace the opportunity to expand my knowledge. I am always seeking new challenges that allow me to utilize my coding skills to make a difference in people's lives. Please don't hesitate to reach out to me for any work or suggestions. I am eager to explore new opportunities and contribute to meaningful projects.
      </span>
    </div>

    <div className='introbox' id='projects'>
      <span className='introtitle'>Projects</span>
      <span className='introtext'>Check out some of my work right here</span>
    <div className='projectcontainer'>
      <Projectcomp pic={cointracker} name='MERN Application' text='Personal Finance Tracker'
        view='https://6460732173abc744bd5ce451--tubular-starship-f4c8df.netlify.app/'
        code='https://github.com/shafi099/MoneyTracker' />

      <Projectcomp pic={yourgenie} name='React Application' text='E-Commerce Website'
        view='https://your-genie.netlify.app/'
        code='https://github.com/shafi099/YourGenie.com' />


      <Projectcomp pic={cinepass} name='CinePass' text='Online Movie Ticket Booking'
        view='https://shafi099.github.io/CinePass/'
        code='https://github.com/shafi099/CinePass' />

      <Projectcomp pic={moviewikki} name='MovieWikki' text='Static Webpage'
        view='https://shafi099.github.io/TeluguCineBuzz-Static-Webpage/'
        code='https://github.com/shafi099/TeluguCineBuzz-Static-Webpage' />
    </div>
    </div>


    <div className='introbox' id='skills'>
    <span className='introtitle'>Skills</span>
    <div className='skilldiv'>
 
    <Skillcomp pic={reactpic} name='React' />
    <Skillcomp pic={javascript} name='Javascript' />
    <Skillcomp pic={mongodb} name='MongoDB' />
    <Skillcomp pic={nodejs} name='NodeJS' />
    <Skillcomp pic={sql} name='MySQL' />
    <Skillcomp pic={python} name='Python' />
    <Skillcomp pic={C} name='C' />
    <Skillcomp pic={html} name='HTML' />
    <Skillcomp pic={css} name='CSS' />
    <Skillcomp pic={photoshop} name='Photoshop' />
    </div>
    </div>

    <div className="introbox" id='contact'>
                {/* <Contact /> */}
                <p className='introtitle'>Contact</p>
                <form action="https://getform.io/f/71066576-9c3c-4fa1-8909-a2a00b969f9a" method="POST" className='FORM'>
                    <div>
                        {/* <label htmlFor="name">Name:</label> */}
                        <input type="text" id="name" name="name" placeholder="Enter your name" className="Feedbackinput" />
                    </div>
                    <div>
                        {/* <label htmlFor="email">Email:</label> */}
                        <input type="email" id="email" name="email" placeholder="Enter your email" className="Feedbackinput" />
                    </div>
                    <div>
                        {/* <label htmlFor="message">Message:</label> */}
                        <textarea type="text" id="message" name="message" placeholder="Enter your message" className="Feedbacktext" />
                    </div>
                    <button type="submit" className='send'>Send</button>
                </form>
            </div>
            <div className='created'>© by Shafi Shaik</div>
  </>);
}

export default App;
