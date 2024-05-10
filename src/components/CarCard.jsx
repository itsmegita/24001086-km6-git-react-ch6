import React from "react";
import UserIcon from "../assets/images/fi_users.svg";
import SettingIcon from "../assets/images/fi_settings.svg";
import CalendarIcon from "../assets/images/fi_calendar.svg";

const CarCard = ({ car }) => {
  return (
    <div className="col-lg-4">
      <div
        className="card col-md-4 mb-4 mt-5 ms-5"
        style={{ width: "333px", height: "90%" }}
      >
        <img
          src={`/src/assets/${car.image}`}
          className="cars-photo"
          alt={car.model}
        />

        <div className="card-body">
          <h5 className="card-title">
            {car.manufacture}/{car.model}
          </h5>
          <h5 className="card-price fw-bold">Rp {car.rentPerDay} / hari</h5>
          <p className="card-text">{car.description}</p>
          <div className="row">
            <div className="col-1">
              <img src={UserIcon} alt="Capacity" />
            </div>
            <div className="col-10">
              <p>{car.capacity} Orang</p>
            </div>
          </div>
          <div className="row">
            <div className="col-1">
              <img src={SettingIcon} alt="Transmission" />
            </div>
            <div className="col-10">
              <p>{car.transmission}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-1">
              <img src={CalendarIcon} alt="Year" />
            </div>
            <div className="col-10">
              <p>Tahun {car.year}</p>
            </div>
          </div>
          <a href="#" className="btn btn-primary">
            Pilih Mobil
          </a>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
