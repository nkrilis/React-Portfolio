import React from 'react';

// import '../styles/styles.css';
import avatar from '../images/nick.png'

function Header() {

  return (
    // <!-- Masthead-->
    <header className="masthead bg-primary text-white text-center">
      <div className="container d-flex align-items-center flex-column">
        {/* <!-- Masthead Avatar Image--> */}
        <img className="masthead-avatar mb-5" src={avatar} alt="..." />
        {/* <!-- Masthead Heading--> */}
        <h3>Hi there I'm</h3>
        <h1 className="masthead-heading text-uppercase mb-0">Nick Krilis</h1>
        {/* <!-- Icon Divider--> */}
        <div className="divider-custom divider-light">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <a href={require("./../files/Nicholas-Krilis-Resume-2022.pdf")} target="_blank" rel="noreferrer" className='text-white'><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-file-earmark-code-fill" viewBox="0 0 16 16">
              <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 
                              0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM6.646 
                              7.646a.5.5 0 1 1 .708.708L5.707 10l1.647 1.646a.5.5 0 0 1-.708.708l-2-2a.5.5 0 0 1 0-.708l2-2zm2.708
                              0 2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L10.293 10 8.646 8.354a.5.5 0 1 1 .708-.708z"/>
            </svg>
            </a>
          </div>
          <div className="divider-custom-line"></div>
        </div>
        {/* <!-- Masthead Subheading--> */}
        <h4>I'm a ...</h4>
        <p className="masthead-subheading font-weight-light mb-0">Software Engineer - Full Stack Developer - Web Designer</p>
      </div>
    </header>

  );
}

export default Header;
