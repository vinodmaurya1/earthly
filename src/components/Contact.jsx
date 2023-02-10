import React from "react";
import peoplepic from "../image/randomPeoplepic.jpg";
import instaLogo from "../image/instaLogo.png";
import locationLogo from "../image/locationLogo.png";
import coverBg from "../image/earthlyCoverpic.jpg"
const Contact = () => {
  return (
    <>
    <div className="coverBg"></div>
    <div className="contact container my-4 d-flex justify-content-between">
      <div className="contactSection">
        <div className="contactAdd text-center mb-4">
          <div className="contactTitle">Contact Us</div>
          <div className="addDesc">
            <div className="my-3">
              16 Liffey Ave, Liffey Valley Park, Lucan, Co. Dublin, K78 HW50,
            </div>
            <div className="my-3">India</div>
            <div className="my-3">example@gmail.com</div>
            <div className="my-3">+914567899119</div>
            <div>
              <img
                style={{ cursor: "pointer" }}
                className="instaLogo mx-3"
                src={instaLogo}
                alt="instaLogo"
              />
              <img
                style={{ cursor: "pointer" }}
                className="locationLogo  mx-3"
                src={locationLogo}
                alt="locationLogo"
              />
            </div>
          </div>
        </div>
        <div className="userInput container">
          <div className="userInputTitle">Get in Touch</div>
          <div className="row g-3 my-4 formFont">
            <div className="col-md-6">First Name
              <input
                type="text"
                className="form-control inputBg"
                aria-label="First name"
              />
            </div>
            <div className="col-md-6">Last Name
              <input
                type="text"
                className="form-control inputBg"
                aria-label="Last name"
              />
            </div>
            <div className="col-md-6">Email
              <input
                type="email"
                className="form-control inputBg"
                aria-label="Email"
              />
            </div>
             <div className="col-md-4">Phone
              <input
                type="number"
                className="form-control inputBg"
                aria-label="Number"
              />
            </div>
            <div className="col-md-12">Message
              <input
                type="text"
                className="form-control inputMsg inputBg"
                aria-label="Message"
              />
            </div>
           <button className="btn userSubmitBtn">Submit</button>
          </div>
        </div>
      </div>
      <div  className="contactAside mx-2">
        <img style={{height:"920px"}} src={peoplepic} alt="" />
      </div>
    </div>
    
    </>
  );
};

export default Contact;
