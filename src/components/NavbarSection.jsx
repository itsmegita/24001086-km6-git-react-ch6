const Navbar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg mb-4">
        <div className="container fluid">
          <div className="logo-nav"></div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#mobile-nav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="offcanvas offcanvas-end w-50 d-lg-none"
            data-bs-scroll="true"
            tabIndex="-1"
            data-bs-backdrop="false"
            id="mobile-nav"
          >
            <div className="offcanvas-header">
              <a href="#" className="nav-link">
                <h5 className="offcanvas-title fw-bold" id="mobile-nav">
                  BCR
                </h5>
              </a>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                <li className="nav-item">
                  <a className="nav-link" href="#our-service">
                    Our Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#why-us">
                    Why Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#testimonial">
                    Testimonial
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#faq">
                    FAQ
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="btn py-2 px-2 rounded-1 fw-bold w-50 text-center"
                    href="register"
                  >
                    Register
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#our-service">
                  Our Service
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#why-us">
                  Why Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#testimonial">
                  Testimonial
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#faq">
                  FAQ
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="btn py-2 px-4 fw-bold text-center"
                  href="register"
                >
                  Register
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
