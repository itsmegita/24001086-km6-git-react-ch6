import TestimonialImg from "../assets/images/img_photo_1.svg";
import Testimonial2Img from "../assets/images/img_photo_2.svg";
import RateIcon from "../assets/images/Rate.svg";
import LeftButtonIcon from "../assets/images//Left_button.svg";
import RightButtonIcon from "../assets/images//Right_button.svg";

const Testimonial = () => {
  return (
    <section id="testimonial">
      <h2 className="pb-2 text-center">Testimonial</h2>
      <p className="testimonial-p text-center">
        Berbagai review positif dari para pelanggan kami
      </p>

      <div id="carouselExample" className="carousel slide m-auto">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="col d-flex align-items-start align-items-center py-5 px-5">
              <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                <img
                  src={TestimonialImg}
                  alt="Testi pict 1"
                  className="testimonial-pict"
                />
              </div>
              <div className="testimonial-col">
                <img src={RateIcon} className="rate" />
                <p className="testimonial">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod”
                </p>
                <h3>John Dee 32, Bromo</h3>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="container">
              <div className="col d-flex align-items-start align-items-center py-5 px-5">
                <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                  <img
                    src={Testimonial2Img}
                    alt="Testi pict 2"
                    className="testimonial-pict"
                  />
                </div>
                <div className="testimonial-col">
                  <img src={RateIcon} className="rate" />
                  <p className="testimonial">
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod”
                  </p>
                  <p className="testimonial-name">John Dee 32, Bromo</p>
                </div>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="container">
              <div className="col d-flex align-items-start align-items-center py-5 px-5">
                <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                  <img
                    src={TestimonialImg}
                    alt="Testi pict 3"
                    className="testimonial-pict"
                  />
                </div>
                <div className="testimonial-col">
                  <img src={RateIcon} className="rate" />
                  <p className="testimonial">
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod”
                  </p>
                  <p className="testimonial-name">John Dee 32, Bromo</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true">
            <img src={LeftButtonIcon} />
          </span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true">
            <img src={RightButtonIcon} />
          </span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};

export default Testimonial;
