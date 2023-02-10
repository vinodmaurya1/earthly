import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerUp text-center">
        <div className="footerUpTitle">Join the Club</div>
        <div className="footerUpTitleDesc">
          Join our email list and get access to specials deals exclusive to our
          subscribers.
          <div className="joinEmail ">
            <form>
              <div class="container col-md-6 my-4">
                <input
                  type="email"
                  class="form-control"
                  placeholder="Enter your email here"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
            </form>
          </div>
          <button className="btn joinBtn userSubmitBtn">Join</button>
        </div>
      </div>
      <div className="footerDown">
      <footer class="mainfooter" role="contentinfo">
  <div class="footer-middle">
  <div class="container">
    <div class="row">
      <div class="col-md-3 col-sm-6">
        
        <div class="footer-pad">
          <h4>Heading 1</h4>
          <ul class="list-unstyled">
            <li><a href="#"></a></li>
            <li><a href="#">Payment Center</a></li>
            <li><a href="#">Contact Directory</a></li>
            <li><a href="#">Forms</a></li>
            <li><a href="#">News and Updates</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
        </div>
      </div>
      <div class="col-md-3 col-sm-6">
        
        <div class="footer-pad">
          <h4>Heading 2</h4>
          <ul class="list-unstyled">
            <li><a href="#">Website Tutorial</a></li>
            <li><a href="#">Accessibility</a></li>
            <li><a href="#">Disclaimer</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Webmaster</a></li>
          </ul>
        </div>
      </div>
      <div class="col-md-3 col-sm-6">
        
        <div class="footer-pad">
          <h4>Heading 3</h4>
          <ul class="list-unstyled">
            <li><a href="#">Parks and Recreation</a></li>
            <li><a href="#">Public Works</a></li>
            <li><a href="#">Police Department</a></li>
            <li><a href="#">Fire</a></li>
            <li><a href="#">Mayor and City Council</a></li>
            <li>
              <a href="#"></a>
            </li>
          </ul>
        </div>
      </div>
    	<div class="col-md-3">
    		<h4>Follow Us</h4>
            <ul class="social-network social-circle">
             <li><a href="#" class="icoFacebook" title="Facebook"><i class="fa fa-facebook"></i></a></li>
             <li><a href="#" class="icoInsta" title="Instagram"><i class="fa-brands fa-instagram"></i></a></li>
             <li><a href="#" class="icoLinkedin" title="Linkedin"><i class="fa fa-linkedin"></i></a></li>
             <li><a href="#" class="icoGitHub" title="GitHub"><i class="fa-brands fa-github"></i></a></li>
             <li><a href="#" class="icoLinkedin" title="Twitter"><i class="fa-brands fa-twitter"></i></a></li>
            </ul>				
		</div>
    </div>
	<div class="row">
		<div class="col-md-12 copy">
			<p class="text-center">&copy; Copyright 2023 - earthly.  All rights reserved.</p>
		</div>
	</div>


  </div>
  </div>
</footer>
      </div>
    </div>
  );
};

export default Footer;
