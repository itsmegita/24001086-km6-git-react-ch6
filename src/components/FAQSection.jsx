const FAQ = () => {
  return (
    <section id="faq">
      <div className="row">
        <div className="col-md-6">
          <h2 className="faq-h2">Frequently Asked Question</h2>
          <p className="faq-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>

        <div className="col-md-6">
          <div className="accordion" id="faq-accordion">
            <div className="accordion-item border" id="accordion-one">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="false"
                  aria-controls="collapseOne"
                >
                  Apa saja syarat yang dibutuhkan?
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="headingOne"
                data-bs-parent="#faq-accordion"
              >
                <div className="accordion-body">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis, voluptate sequi. Perferendis animi porro, autem
                  debitis aliquam magni deleniti beatae sequi id eaque vel,
                  assumenda libero est ipsam? Dignissimos, vero!
                </div>
              </div>
            </div>

            <div className="accordion-item border">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Berapa hari minimal sewa mobil lepas kunci?
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#faq-accordion"
              >
                <div className="accordion-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                  iusto esse dolor, atque dolore officiis voluptatibus rerum
                  adipisci, aspernatur soluta aut illum impedit cumque commodi
                  doloribus tenetur, similique laboriosam consequuntur!
                </div>
              </div>
            </div>

            <div className="accordion-item my-3 border">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Berapa hari sebelumnya sabaiknya booking sewa mobil?
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#faq-accordion"
              >
                <div className="accordion-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                  rerum libero corporis officia quibusdam esse repudiandae,
                  cumque cum quaerat, facilis doloribus labore neque in
                  consequuntur cupiditate exercitationem tempore. Asperiores,
                  excepturi!
                </div>
              </div>
            </div>

            <div className="accordion-item my-3 border">
              <h2 className="accordion-header" id="headingFour">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  Apakah Ada biaya antar-jemput?
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#faq-accordion"
              >
                <div className="accordion-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                  rerum libero corporis officia quibusdam esse repudiandae,
                  cumque cum quaerat, facilis doloribus labore neque in
                  consequuntur cupiditate exercitationem tempore. Asperiores,
                  excepturi!
                </div>
              </div>
            </div>

            <div className="accordion-item my-3 border">
              <h2 className="accordion-header" id="headingFive">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseFive"
                >
                  Bagaimana jika terjadi kecelakaan
                </button>
              </h2>
              <div
                id="collapseFive"
                className="accordion-collapse collapse"
                aria-labelledby="headingFive"
                data-bs-parent="#faq-accordion"
              >
                <div className="accordion-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                  rerum libero corporis officia quibusdam esse repudiandae,
                  cumque cum quaerat, facilis doloribus labore neque in
                  consequuntur cupiditate exercitationem tempore. Asperiores,
                  excepturi!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
