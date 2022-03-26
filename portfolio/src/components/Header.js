import React from 'react';

import '../styles/styles.css';

function Header() {

  return (
    // <!-- Masthead-->
    <header class="masthead bg-primary text-white text-center">
        <div class="container d-flex align-items-center flex-column">
            {/* <!-- Masthead Avatar Image--> */}
            <img class="masthead-avatar mb-5" src="assets/img/avataaars.svg" alt="..." />
            {/* <!-- Masthead Heading--> */}
            <h1 class="masthead-heading text-uppercase mb-0">Nicholas Krilis</h1>
            {/* <!-- Icon Divider--> */}
            <div class="divider-custom divider-light">
                <div class="divider-custom-line"></div>
                <div class="divider-custom-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-file-earmark-code-fill" viewBox="0 0 16 16">
                      <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 
                              0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM6.646 
                              7.646a.5.5 0 1 1 .708.708L5.707 10l1.647 1.646a.5.5 0 0 1-.708.708l-2-2a.5.5 0 0 1 0-.708l2-2zm2.708
                              0 2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L10.293 10 8.646 8.354a.5.5 0 1 1 .708-.708z"/>
                  </svg>
                </div>
                <div class="divider-custom-line"></div>
            </div>
            {/* <!-- Masthead Subheading--> */}
            <p class="masthead-subheading font-weight-light mb-0">Full Stack Developer - Web Designer - Software Developer</p>
        </div>
    </header>
    
  );
}

export default Header;
