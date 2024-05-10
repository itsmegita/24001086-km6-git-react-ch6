import FacebookIcon from "../assets/images/icon_facebook.svg";
import InstagramIcon from "../assets/images/icon_instagram.svg";
import TwitterIcon from "../assets/images/icon_twitter.svg";
import MailIcon from "../assets/images/icon_mail.svg";
import TwitchIcon from "../assets/images/icon_twitch.svg";

const Footer = () => {
  return (
    <section id="footer">
      <footer className="bd-footer py-4 py-md-5 mt-5">
        <div className="container py-4 py-md-5 px-4 px-md-3 text-body-secondary">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-3 mb-4">
              <p className="footer-p">
                Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000
              </p>
              <p className="footer-p">binarcarrental@gmail.com</p>
              <p className="footer-p">081-233-334-808</p>
            </div>

            <div className="col-12 col-md-6 col-lg-3 mb-4">
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a href="#our-service">Our services</a>
                </li>
                <li className="mb-2">
                  <a href="#why-us">Why Us</a>
                </li>
                <li className="mb-2">
                  <a href="#testimonial">Testimonial</a>
                </li>
                <li className="mb-2">
                  <a href="#faq">FAQ</a>
                </li>
              </ul>
            </div>

            <div className="col-12 col-md-6 col-lg-3 mb-4">
              <div className="d-flex flex-column align-items-start">
                <p className="footer-icon">Connect with us</p>
                <div className="d-flex justify-content-between align-items-center">
                  <img src={FacebookIcon} />
                  <img src={InstagramIcon} />
                  <img src={TwitterIcon} />
                  <img src={MailIcon} />
                  <img src={TwitchIcon} />
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3">
              <div className="copyright">
                <p>Copyright Binar 2022</p>
                <div className="logo-cr"></div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
