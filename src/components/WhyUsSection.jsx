import ThumpsUpIcon from "../assets/images/icon_complete.svg";
import PriceIcon from "../assets/images/icon_price.svg";
import TimeIcon from "../assets/images/icon_24hrs.svg";
import ProfessionalIcon from "../assets/images/icon_professional.svg";

const WhyUs = () => {
  return (
    <section
      id="why-us"
      className="d-flex justify-content-center align-items-center mt-5"
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="fw-bold">Why Us?</h2>
            <p>Mengapa harus pilih Binar Car Rental?</p>
          </div>

          <div className="row d-flex align-items-stretch">
            <div className="col-12 col-md-3 mb-3">
              <div className="card">
                <div className="card-body">
                  <img
                    id="icon"
                    className="card-img-top mb-3"
                    src={ThumpsUpIcon}
                    alt="thumpsup-icon"
                  />
                  <h5 className="card-title fw-bold">Mobil Lengkap</h5>
                  <p className="card-text">
                    Tersedia banyak pilihan mobil, kondisi masih baru, bersih
                    dan terawat
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3 mb-3">
              <div className="card">
                <div className="card-body">
                  <img
                    id="icon"
                    className="card-img-top mb-3"
                    src={PriceIcon}
                    alt="price-icon"
                  />
                  <h5 className="card-title fw-bold">Harga Murah</h5>
                  <p className="card-text">
                    Harga murah dan bersaing, bisa bandingkan harga kami dengan
                    rental mobil lain
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3 mb-3">
              <div className="card">
                <div className="card-body">
                  <img
                    id="icon"
                    className="card-img-top mb-3"
                    src={TimeIcon}
                    alt="24hrs-icon"
                  />
                  <h5 className="card-title fw-bold">Layanan 24 Jam</h5>
                  <p className="card-text">
                    Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami
                    juga tersedia di akhir minggu
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3 mb-3">
              <div className="card">
                <div className="card-body">
                  <img
                    id="icon"
                    className="card-img-top mb-3"
                    src={ProfessionalIcon}
                    alt="professional-icon"
                  />
                  <h5 className="card-title fw-bold">Sopir Professional</h5>
                  <p className="card-text">
                    Sopir yang profesional, berpengalaman, jujur, ramah dan
                    selalu tepat waktu
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
