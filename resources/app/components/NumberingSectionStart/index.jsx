import React from 'react';

export default function Index() {
    return (
        <section className="numbering-wrapper">
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-6">
          <div className="number-services">
            <h3><span className="size">25</span><span className="total-text"><span className="text">Years of </span><span
                  className="big-text">Experience</span></span></h3>
            <p className="line">Lorem ipsum ipsum ipsum dolor sit amet, adipiscing. Lorem ipsum dolor sit amet, consectetuer
              adipiscing. Lorem ipsum ipsum ipsum dolor sit em amet, consectetuer adipiscing.</p>
            <div className="row">
              <div className="col-sm-4">
                <div className="single-section">
                  <i className="fa fa-lightbulb-o" aria-hidden="true"></i>
                  <h3>Certification</h3>
                  <p>Lorem ipsum ipsuiscing.
                    Lorem ipsuipsum
                    adipiscing.</p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="single-section">
                  <i className="fa fa-lightbulb-o" aria-hidden="true"></i>
                  <h3>24/7 Service</h3>
                  <p>Lorem ipsum ipsuiscing.
                    Lorem ipsuipsum
                    adipiscing.</p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="single-section">
                  <i className="fa fa-lightbulb-o" aria-hidden="true"></i>
                  <h3>Fair Price</h3>
                  <p>Lorem ipsum ipsuiscing.
                    Lorem ipsuipsum
                    adipiscing.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6">
          <div className="row">
            <div className="col-sm-6">
              <div className="counter">
                <div className="icon"><span className="lnr lnr-users"></span></div>
                <div className="number animateNumber" data-num="999"> <span>999</span></div>
                <p>Workers Employed</p>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="counter">
                <div className="icon"><span className="lnr lnr-clock"></span></div>
                <div className="number animateNumber" data-num="7200"> <span>7200</span></div>
                <p>Hours Worked</p>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="counter">
                <div className="icon"><span className="lnr lnr-home"></span></div>
                <div className="number animateNumber" data-num="9999"> <span>9999</span></div>
                <p>Projects Completed</p>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="counter">
                <div className="icon"><span className="lnr lnr-gift"></span></div>
                <div className="number animateNumber" data-num="1057"> <span>1057</span></div>
                <p>Awards Won</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    );
}