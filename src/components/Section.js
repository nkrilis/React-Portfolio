import React from 'react';

// import '../styles/styles.css';
import gitfit from '../images/gitfit.png'
import idrink from '../images/idrink.png'
import socialApi from '../images/social-api.png'
import techBlog from '../images/tech-blog.png'
import textEditor from '../images/text-editor.png'
import other from '../images/other.png'


function Section() {
  // create main portfolio section
  return (
    // <!-- Portfolio Section-->
        <section className="page-section portfolio" id="portfolio">
            <div className="container">
                {/* <!-- Portfolio Section Heading--> */}
                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>
                {/* <!-- Icon Divider--> */}
                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-kanban-fill" viewBox="0 0 16 16">
                            <path d="M2.5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2h-11zm5 2h1a1
                             1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm-5 1a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v7a1 1 0 0 1-1 
                             1h-1a1 1 0 0 1-1-1V3zm9-1h1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z"/>
                        </svg>
                    </div>
                    <div className="divider-custom-line"></div>
                </div>
                {/* <!-- Portfolio Grid Items--> */}
                <div className="row justify-content-center">
                    {/* <!-- Portfolio Item 1--> */}
                    <div className="col-md-6 col-lg-4 mb-5">
                        <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal1">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img className="img-fluid" src={gitfit} alt="Git Fit Project" />
                        </div>
                    </div>
                    {/* <!-- Portfolio Item 2--> */}
                    <div className="col-md-6 col-lg-4 mb-5">
                        <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal2">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img className="img-fluid" src={idrink} alt="iDrink Project" />
                        </div>
                    </div>
                    {/* <!-- Portfolio Item 3--> */}
                    <div className="col-md-6 col-lg-4 mb-5">
                        <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal3">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img className="img-fluid" src={techBlog} alt="Tech Blog Project" />
                        </div>
                    </div>
                    {/* <!-- Portfolio Item 4--> */}
                    <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
                        <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal4">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img className="img-fluid" src={textEditor} alt="Text Editor Project" />
                        </div>
                    </div>
                    {/* <!-- Portfolio Item 5--> */}
                    <div className="col-md-6 col-lg-4 mb-5 mb-md-0">
                        <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal5">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img className="img-fluid" src={socialApi} alt="Social Network API Project" />
                        </div>
                    </div>
                    {/* <!-- Portfolio Item 6--> */}
                    <div className="col-md-6 col-lg-4">
                        <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal6">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img className="img-fluid" src={other} alt="Other Projects" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
      
  );
}

export default Section;
