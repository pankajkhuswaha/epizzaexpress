import React from 'react'

const About = () => {
  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-5 col-md-12 col-sm-12">
          <div className="s-about-img p-relative">
            <img src="/img/about/about.png" alt="img" />
          </div>
        </div>
        <div className="col-lg-7 col-md-12 col-sm-12">
          <div className="about-content s-about-content pl-30">
            <div className="title-about">
              <div className="section-title mb-20">
                <span>ABOUT US</span>
                <h2>LOCATED IN A SMALL TOWN</h2>
                <p>Made of fresh & premium ingredients</p>
              </div>
              <div className="year mb-20">
                <div className="text">
                  <h2>
                    25 <sub>+</sub>
                  </h2>
                  <p>YEARS OF EXPERIENCE</p>
                </div>
              </div>
            </div>
            <div className="about-text mb-15">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </p>
            </div>
            <div className="about-text">
              <div className="avatar">
                <img src="/img/about/avatar.png" alt="avatar" />
                <div className="text">
                  <h4>Jemi D. William</h4>
                  <span>FOUNDER</span>
                </div>
              </div>
              <div>
                <img src="/img/about/signature.png" alt="signature" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About