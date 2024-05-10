import { Link } from "react-router-dom";
import CarImg from "../assets/images/img_car.png";

const Hero = () => {
  return (
    <section id="main">
      <div className="container">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5 position-relative">
          <div className="col-12 col-lg-6 order-lg-last">
            <div className="overlay-content">
              <h2 className="overlay-title">
                Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
              </h2>
              <p className="overlay-description">
                Selamat datang di Binar Car Rental. Kami menyediakan mobil
                kualitas terbaik dengan harga terjangkau. Selalu siap melayani
                kebutuhanmu untuk sewa mobil selama 24 jam.
              </p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <Link to="/cars" className="btn btn-brand">
                  Mulai Sewa Mobil
                </Link>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6">
            <img
              src={CarImg}
              className="d-block mx-lg-auto img-fluid"
              alt="car image"
              width="704px"
              height="407px"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
