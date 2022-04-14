import React from "react";

// import "../styles/styles.css";

import gitfit from '../images/gitfit.png'
import idrink from '../images/idrink.png'
import socialApi from '../images/social-api.png'
import techBlog from '../images/tech-blog.png'
import textEditor from '../images/text-editor.png'
import other from '../images/other.png'

function Modals () {
    return (
        <>
            {/* // <!-- Portfolio Modals--> */}
            {/* // <!-- Portfolio Modal 1--> */}
            <div className="portfolio-modal modal fade" id="portfolioModal1" tabIndex="-1" aria-labelledby="portfolioModal1" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                        <div className="modal-body text-center pb-5">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8">
                                        {/* <!-- Portfolio Modal - Title--> */}
                                        <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">GitFit</h2>
                                        {/* <!-- Icon Divider--> */}
                                        <div className="divider-custom">
                                            <div className="divider-custom-line"></div>
                                            <div className="divider-custom-icon"><h5 className="text-uppercase">click image for deployment</h5></div>
                                            <div className="divider-custom-line"></div>
                                        </div>
                                        {/* <!-- Portfolio Modal - Image--> */}
                                       <a href="https://gitfit-2.herokuapp.com/"><img className="img-fluid rounded mb-5" src={gitfit} alt="gitfit project" /> </a>
                                        {/* <!-- Portfolio Modal - Text--> */}
                                        <p className="mb-4">GitFit is a React.js-driven application designed to discover and organize your workouts, 
                                                            track progress, and interact with users and trainers. Node.js and Express.js are used as 
                                                            the server-side framework, and data is handled by GraphQL, MongoDB and MongoDB Atlas.
                                        </p>
                                        <a href="https://github.com/nkrilis/GitFit">
                                            <button className="btn btn-primary">
                                                Source Code
                                            </button>
                                        </a>

                                        <br/><br/>
                                        <button className="btn btn-primary" data-bs-dismiss="modal">
                                            <i className="fas fa-xmark fa-fw"></i>
                                            Close Window
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* // <!-- Portfolio Modal 2--> */}
            <div className="portfolio-modal modal fade" id="portfolioModal2" tabIndex="-1" aria-labelledby="portfolioModal2" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                        <div className="modal-body text-center pb-5">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8">
                                        {/* <!-- Portfolio Modal - Title--> */}
                                        <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">iDrink</h2>
                                        {/* <!-- Icon Divider--> */}
                                        <div className="divider-custom">
                                            <div className="divider-custom-line"></div>
                                            <div className="divider-custom-icon"><h5 className="text-uppercase">click image for deployment</h5></div>
                                            <div className="divider-custom-line"></div>
                                        </div>
                                        {/* <!-- Portfolio Modal - Image--> */}
                                        <a href="https://nkrilis.github.io/iDrink/">
                                            <img className="img-fluid rounded mb-5" src={idrink} alt="iDrink Project" />
                                        </a>
                                        {/* <!-- Portfolio Modal - Text--> */}
                                        <p className="mb-4">iDrink is a website where you can familiarize with any alcoholic drink in the world. 
                                                            In this website you are asked to enter your favourite drink and your favourite movie genre. 
                                                            Then the website will provide results with the ingredients and instructions for that particular 
                                                            drink with an image and Youtube link. Besides a movie suggestion according to the genre you 
                                                            entered will be displayed. The APIs we used for this application is from TheCocktailDB and Streaming 
                                                            availability.
                                        </p>

                                        <a href="https://github.com/nkrilis/iDrink">
                                            <button className="btn btn-primary">
                                                Source Code
                                            </button>
                                        </a>

                                        <br/><br/>
                                        
                                        <button className="btn btn-primary" data-bs-dismiss="modal">
                                            <i className="fas fa-xmark fa-fw"></i>
                                            Close Window
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* // <!-- Portfolio Modal 3--> */}
            <div className="portfolio-modal modal fade" id="portfolioModal3" tabIndex="-1" aria-labelledby="portfolioModal3" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                        <div className="modal-body text-center pb-5">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8">
                                        {/* <!-- Portfolio Modal - Title--> */}
                                        <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Tech Blog</h2>
                                        {/* < />!-- Icon Divider--> */}
                                        <div className="divider-custom">
                                            <div className="divider-custom-line"></div>
                                            <div className="divider-custom-icon"><h5 className="text-uppercase">click image for deployment</h5></div>
                                            <div className="divider-custom-line"></div>
                                        </div>
                                        {/* <!-- Portfolio Modal - Image--> */}
                                        <a href="https://nkrilis-tech-blog.herokuapp.com/">
                                            <img className="img-fluid rounded mb-5" src={techBlog} alt="Tech Blog Project" />
                                        </a>
                                        {/* <!-- Portfolio Modal - Text--> */}
                                        <p className="mb-4">Tech Blog gives a user the ability to view blog posts made by various users. 
                                                            When a user creates an account they will have the ability to create their own blog 
                                                            posts and comment on other user's blog posts. The user also has the ability to update 
                                                            their blog posts at any time through their dashboard.
                                        </p>
                                        
                                        <a href="https://github.com/nkrilis/Tech-Blog">
                                            <button className="btn btn-primary">
                                                Source Code
                                            </button>
                                        </a>

                                        <br/><br/>

                                        <button className="btn btn-primary" data-bs-dismiss="modal">
                                            <i className="fas fa-xmark fa-fw"></i>
                                            Close Window
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* // <!-- Portfolio Modal 4--> */}
            <div className="portfolio-modal modal fade" id="portfolioModal4" tabIndex="-1" aria-labelledby="portfolioModal4" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                        <div className="modal-body text-center pb-5">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8">
                                        {/* <!-- Portfolio Modal - Title--> */}
                                        <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Text Editor</h2>
                                        {/* <!-- Icon Divider--> */}
                                        <div className="divider-custom">
                                            <div className="divider-custom-line"></div>
                                            <div className="divider-custom-icon"><h5 className="text-uppercase">click image for deployment</h5></div>
                                            <div className="divider-custom-line"></div>
                                        </div>
                                        {/* <!-- Portfolio Modal - Image--> */}
                                        <a href="https://pwa-nicks-text-editor.herokuapp.com/">
                                            <img className="img-fluid rounded mb-5" src={textEditor} alt="Text Editor Project" />
                                        </a>
                                        {/* <!-- Portfolio Modal - Text--> */}
                                        <p className="mb-4">This project is a Progressive Web App that allows users to write code with 
                                                            syntax highlighting. The main functionallity of this application however is the ability to download 
                                                            the application to work natively on their desktop. This is done through webpack and a plugin called 
                                                            'webpack-pwa-manifest` which allows the application to be bundled and installed. The application also 
                                                            has the ability to work offline, so that the user experience remains the same with or without an internet 
                                                            connection, this is done through cache storage.
                                        </p>

                                        <a href="https://github.com/nkrilis/PWA-Text-Editor">
                                            <button className="btn btn-primary">
                                                Source Code
                                            </button>
                                        </a>

                                        <br/><br/>

                                        <button className="btn btn-primary" data-bs-dismiss="modal">
                                            <i className="fas fa-xmark fa-fw"></i>
                                            Close Window
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* // <!-- Portfolio Modal 5--> */}
            <div className="portfolio-modal modal fade" id="portfolioModal5" tabIndex="-1" aria-labelledby="portfolioModal5" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                        <div className="modal-body text-center pb-5">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8">
                                        {/* <!-- Portfolio Modal - Title--> */}
                                        <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Social Network API</h2>
                                        {/* <!-- Icon Divider--> */}
                                        <div className="divider-custom">
                                            <div className="divider-custom-line"></div>
                                            <div className="divider-custom-icon"><h5 className="text-uppercase">click image for deployment</h5></div>
                                            <div className="divider-custom-line"></div>
                                        </div>
                                        {/* <!-- Portfolio Modal - Image--> */}
                                        <a href="https://drive.google.com/file/d/1AdIoUsmwvbhGGLtP447Ssvc-qALzrYS_/view?usp=sharing">
                                            <img className="img-fluid rounded mb-5" src={socialApi} alt="Social Network Project" />
                                        </a>
                                        {/* <!-- Portfolio Modal - Text--> */}
                                        <p className="mb-4">This application is created through the use of mongoDB, express server, 
                                                            and mongoose(an object modeling tool for mongoDB). This application gives the 
                                                            user the ability to access and modify a typical social network. There are three schemas associated 
                                                            with this project which are User, Thought, and Reaction. Just like in any social network there are 
                                                            users who are able to post something, then another user can respond/react to that post. This application 
                                                            includes the ability to create, update, and delete users as well as create, update, and delete thoughts 
                                                            (which can or cannot be associated to a user). In addition to this the application also provides the 
                                                            functionallity to add and delete reactions to specified user's thoughts. 
                                        </p>
                                        
                                        <a href="https://github.com/nkrilis/Social-Network-API">
                                            <button className="btn btn-primary">
                                                Source Code
                                            </button>
                                        </a>

                                        <br/><br/>
                                        
                                        <button className="btn btn-primary" data-bs-dismiss="modal">
                                            <i className="fas fa-xmark fa-fw"></i>
                                            Close Window
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* // <!-- Portfolio Modal 6--> */}
            <div className="portfolio-modal modal fade" id="portfolioModal6" tabIndex="-1" aria-labelledby="portfolioModal6" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                        <div className="modal-body text-center pb-5">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8">
                                        {/* < />!-- Portfolio Modal - Title--> */}
                                        <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Other Projects</h2>
                                        {/* < />!-- Icon Divider--> */}
                                        <div className="divider-custom">
                                            <div className="divider-custom-line"></div>
                                            <div className="divider-custom-icon"><h5 className="text-uppercase">click image for deployment</h5></div>
                                            <div className="divider-custom-line"></div>
                                        </div>
                                        {/* < />!-- Portfolio Modal - Image--> */}
                                        <a href="https://github.com/nkrilis">
                                            <img className="img-fluid rounded mb-5" src={other} alt="Other Projects" />
                                        </a>
                                        {/* < />!-- Portfolio Modal - Text--> */}
                                        <p className="mb-4">Here you can view other projects I have created and am currently working on.</p>

                                        <a href="https://github.com/nkrilis">
                                            <button className="btn btn-primary">
                                                My GitHub
                                            </button>
                                        </a>

                                        <br/><br/>

                                        <button className="btn btn-primary" data-bs-dismiss="modal">
                                            <i className="fas fa-xmark fa-fw"></i>
                                            Close Window
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modals;