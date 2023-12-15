import React from "react";

// import "../styles/styles.css";

function Footer() {
    return (
        // <!-- Footer-->
        <footer className="footer text-center">
            <div className="container">
                <div className="row">
                    {/* <!-- Footer Location--> */}
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">Location</h4>
                        <p className="lead mb-0">
                            Toronto, ON
                            <br />
                        </p>
                    </div>
                    {/* <!-- Footer Social Icons--> */}
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">My Links</h4>
                        <a className="btn-rounded btn-outline-light btn-social mx-1" href="https://github.com/nkrilis"><i className="fab fa-fw fa-github"></i></a>
                        <a className="btn-rounded btn-outline-light btn-social mx-1" href="https://www.linkedin.com/in/nicholas-krilis/"><i className="fab fa-fw fa-linkedin-in"></i></a>
                        <a className="btn-rounded btn-outline-light btn-social mx-1" href={require("./../files/Nicholas-Krilis-Resume-2022.pdf")} target="_blank" rel="noreferrer"><i className="fa-regular fa-file"></i></a>
                    </div>
                    {/* <!-- Footer About Text--> */}
                    <div className="col-lg-4">
                        <h4 className="text-uppercase mb-4">Thank You</h4>
                        <p className="lead mb-0">
                            Thank you for visting my website, I look forward to working with you soon!
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;