import React from "react";
import { Link } from "react-router-dom";

import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Services from "../components/Services";
import FeturedRooms from "../components/FeaturedRooms";

const Home = () => {
  return (
    <React.Fragment>
      <Hero>
        <Banner
          title="luxurious room"
          subtitle="Delux rooms starting at Rs.6200"
        >
          <Link to="/rooms" className="btn-primary">
            our rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeturedRooms />
    </React.Fragment>
  );
};

export default Home;
