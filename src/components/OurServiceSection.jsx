import ServiceImg from "../assets/images/img_service.png";
import ServiceIcon from "../assets/images/Group_53.svg";

const OurService = () => {
  return (
    <section id="our-service">
      <div className="container">
        <div className="row align-items-center g-5 py-5 position-relative">
          <div className="col-12 col-lg-6">
            <img
              src={ServiceImg}
              className="d-block mx-lg-auto img-fluid"
              alt="our-service image"
              width="450px"
              height="428px"
              loading="lazy"
            />
          </div>

          <div className="col-12 col-lg-6">
            <div className="overlay-content">
              <h2 className="overlay-title">
                Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
              </h2>
              <p className="overlay-description">
                Selamat datang di Binar Car Rental. Kami menyediakan mobil
                kualitas terbaik dengan harga terjangkau. Selalu siap melayani
                kebutuhanmu untuk sewa mobil selama 24 jam.
              </p>

              <div className="icon-paragraf">
                <div className="icon">
                  <img src={ServiceIcon} />
                </div>
                <div className="paragraf">
                  <p>Sewa Mobil Dengan Supir di Bali 12 Jam</p>
                </div>
              </div>
              <div className="icon-paragraf">
                <div className="icon">
                  <img src={ServiceIcon} />
                </div>
                <div className="paragraf">
                  <p>Sewa Mobil Lepas Kunci di Bali 24 Jam</p>
                </div>
              </div>
              <div className="icon-paragraf">
                <div className="icon">
                  <img src={ServiceIcon} />
                </div>
                <div className="paragraf">
                  <p>Sewa Mobil Jangka Panjang Bulanan</p>
                </div>
              </div>
              <div className="icon-paragraf">
                <div className="icon">
                  <img src={ServiceIcon} />
                </div>
                <div className="paragraf">
                  <p>Gratis Antar - Jemput Mobil di Bandara</p>
                </div>
              </div>
              <div className="icon-paragraf">
                <div className="icon">
                  <img src={ServiceIcon} />
                </div>
                <div className="paragraf">
                  <p>Layanan Airport Transfer / Drop In Out</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurService;
