import React from "react";
import {Button} from 'react-bootstrap'
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import HeroSection from "./HeroSection";
// import ServiceSection from "./ServiceSection";
// import PickupDetails from "./PickupDetails";
import HowItWorks from "./HowItWorks";
import CustomerReviews from "./CustomerReviews";
import ContactInformation from "./ContactInformation";
import Footer from "./Footer";

const Home = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
    <div className="app">
      <HeroSection />
      <div className="d-grid gap-2">
        <Button variant="danger" onClick={handleLogout}>
          Log out
        </Button>
      </div>
      {/* <ServiceSection /> */}
      {/* <PickupDetails /> */}
      <HowItWorks />
      <CustomerReviews />
      <ContactInformation />
      <Footer />
    </div>
      {/* <div className="p-4 mt-3 text-center">
        Hello Welcome <br />
        {user && user.email}
      </div>
      <div className="d-grid gap-2">
        <Button variant="primary" onClick={handleLogout}>
          Log out
        </Button>
      </div> */}
    </>
  );
};

export default Home;