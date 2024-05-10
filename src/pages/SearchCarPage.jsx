import Footer from "../components/FooterSection";
import HeroCar from "../components/CarHeroSection";
import FindCar from "../components/FindCar";
import Navbar from "../components/NavbarSection";
import { CarContextProvider } from "../contexts/CarContext";

const SearchCarPage = () => {
  return (
    <CarContextProvider>
      <Navbar />
      <main>
        <HeroCar />
        <FindCar />
      </main>
      <Footer />
    </CarContextProvider>
  );
};

export default SearchCarPage;
