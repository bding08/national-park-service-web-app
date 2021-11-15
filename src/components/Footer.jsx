import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      {/* <section className="footer-subscription">
        <p className="footer-subscipriton-heading">
          Join the Adventure newsletter to receive our best park deals
        </p>
        <p className="footer-subscription-text">
          You can unsubscribe at any time.
        </p>
        <div className="input-areas">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="footer-input"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section> */}
      <div className="footer-links">
        {/* <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/sign-up">How it works</Link>
            <Link to="/"> Testimonials</Link>
            <Link to="/"> Careers </Link>
            <Link to="/"> Investors </Link>
            <Link to="/"> Terms of Service </Link>
          </div>
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/sign-up">How it works</Link>
            <Link to="/"> Testimonials</Link>
            <Link to="/"> Careers </Link>
            <Link to="/"> Investors </Link>
            <Link to="/"> Terms of Service </Link>
          </div>
        </div> */}
        {/* <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/sign-up">How it works</Link>
            <Link to="/"> Testimonials</Link>
            <Link to="/"> Careers </Link>
            <Link to="/"> Investors </Link>
            <Link to="/"> Terms of Service </Link>
          </div>
        </div> */}
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              National Park Service <i className="fas fa-mountain"></i>
            </Link>
          </div>
          <small className="website-rights">
            National Park Services © 2021
          </small>
          <div className="social-icons">
            <Link
              className="social-icon-link facebook"
              to={{ pathname: "https://www.facebook.com/nationalparkservice/" }}
              target="_blank"
              aria-labe="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link
              className="social-icon-link instagram"
              to={{
                pathname:
                  "https://www.instagram.com/nationalparkservice/?hl=en",
              }}
              target="_blank"
              aria-labe="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </Link>
            <Link
              className="social-icon-link youtube"
              to={{
                pathname:
                  "https://www.youtube.com/channel/UCj_0DU9KRP_bQp_cOL4Ljbg",
              }}
              target="_blank"
              aria-labe="Youtube"
            >
              <i className="fab fa-youtube"></i>
            </Link>
            <Link
              className="social-icon-link twitter"
              to={{
                pathname:
                  "https://twitter.com/NatlParkService?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
              }}
              target="_blank"
              aria-labe="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
