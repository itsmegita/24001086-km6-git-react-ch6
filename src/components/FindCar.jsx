import React, { useContext, useState } from "react";
import { CarContext } from "../contexts/CarContext";
import CarCard from "./CarCard";
import UserIcon from "../assets/images/fi_users.svg";

const FindCar = () => {
  const { cars } = useContext(CarContext);
  const [filteredCars, setFilteredCars] = useState([]);
  const [tipeDriver, setTipeDriver] = useState("default");
  const [tanggal, setTanggal] = useState("");
  const [waktuJemput, setWaktuJemput] = useState("");
  const [jumlahPenumpang, setJumlahPenumpang] = useState(0);

  const loadFilter = () => {
    const filteredCars = cars.filter((data) => {
      const tanggalJemputData = new Date(data.availableAt).getTime();
      const tanggalValue = new Date(`${tanggal} ${waktuJemput}`).getTime();
      const checkWaktu = tanggalJemputData >= tanggalValue;
      const availableAt = tipeDriver === "true" && data.available;
      const notAvailableAt = tipeDriver === "false" && !data.available;
      const penumpang = data.capacity >= jumlahPenumpang;

      if (
        tipeDriver !== "default" &&
        tanggal !== "" &&
        waktuJemput !== "" &&
        jumlahPenumpang >= 0
      ) {
        return (availableAt || notAvailableAt) && checkWaktu && penumpang;
      } else if (tipeDriver !== "default" && jumlahPenumpang > 0) {
        return (availableAt || notAvailableAt) && penumpang;
      } else if (tanggal !== "" && waktuJemput !== "" && jumlahPenumpang > 0) {
        return checkWaktu && penumpang;
      } else if (tanggal !== "" && waktuJemput !== "") {
        return checkWaktu;
      } else if (tipeDriver !== "default") {
        return availableAt || notAvailableAt;
      } else {
        return penumpang;
      }
    });

    setFilteredCars(filteredCars);
  };

  const handleTanggalChange = (e) => {
    const tanggalValue = e.target.value;
    console.log("Tanggal yang dipilih:", tanggalValue);
  };

  const handleWaktuChange = (e) => {
    const waktuValue = e.target.value;
    console.log("Waktu yang dipilih:", waktuValue);
  };

  return (
    <section className="search" id="find-car">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-12">
            <div className="row search__card mx-lg-5 py-3 px-4">
              <div className="col-lg-auto col-xl-2 col-xxl-3 col-md-auto">
                <label>Tipe Driver</label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  id="tipeDriver"
                  style={{ width: "200px" }}
                  alt="Pilih Tipe Driver"
                  value={tipeDriver}
                  onChange={(e) => setTipeDriver(e.target.value)}
                >
                  <option value="default">
                    Pilih Tipe Driver &nbsp; &nbsp; &nbsp; &nbsp;
                  </option>
                  <option value="true">Dengan Supir</option>
                  <option value="false">Tanpa Supir (Lepas Kunci)</option>
                </select>
              </div>
              <div className="col-lg-auto col-xl-auto col-md-auto">
                <label>Tanggal</label>
                <input
                  type="date"
                  className="form-control"
                  placeholder="Pilih Tanggal"
                  id="tanggal"
                  style={{ width: "200px" }}
                  value={tanggal}
                  onChange={handleTanggalChange}
                />
              </div>
              <div className="col-lg-auto col-xl-auto col-md-auto search__time">
                <label>Pilih Waktu</label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  id="waktuJemput"
                  style={{ width: "200px" }}
                  value={waktuJemput}
                  onChange={handleWaktuChange}
                >
                  <option value="false">
                    Pilih Waktu &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  </option>
                  <option value="08:00">08.00 WIB</option>
                  <option value="09:00">09.00 WIB</option>
                  <option value="10:00">10.00 WIB</option>
                  <option value="11:00">11.00 WIB</option>
                  <option value="12:00">12.00 WIB</option>
                </select>
              </div>
              <div className="col-lg-auto col-xl-auto col-md-auto">
                <label className="fw-light">Jumlah Penumpang (optional)</label>
                <div className="input-group">
                  <input
                    type="search"
                    className="form-control border-end-0"
                    placeholder="Jumlah Penumpang"
                    id="jumlahPenumpang"
                    value={jumlahPenumpang}
                    onChange={(e) => setJumlahPenumpang(e.target.value)}
                    style={{ width: "200px" }}
                  />
                  <span className="input-group-text bg-white">
                    <img src={UserIcon} width="20px" alt="" />
                  </span>
                </div>
              </div>
              <div className="col-lg-2 col-xl-auto col-md-2 pt-4">
                <button
                  className="btn btn-utama"
                  id="load-btn"
                  onClick={loadFilter}
                >
                  Cari Mobil
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-4">
        <div className="row">
          {filteredCars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FindCar;
