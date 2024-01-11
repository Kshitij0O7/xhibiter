import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";

import {
  Hero,
  Bids,
  Top_collection,
  Tranding_category,
  NewseLatter,
  carousel,
  Auctions_categories,
} from "../../components/component";
import Latest_Drop from "../../components/collectrions/Latest_Drop";
import Meta from "../../components/Meta";
import Button from "../../components/cta/Button";
import Browse_category_carousel from "../../components/carousel/Browse_category_carousel";
import BidsCarousel from "../../components/carousel/bidsCarousel";
import HeroCarousel from "../../components/carousel/HeroCarousel";
import Slider from "../../components/Slider";
import Hottest_Sales from "../../components/collectrions/Hottest_Sales";
import Team from "../../components/ico-landing/Team";
import Benifits from "../../components/dao/Benifits";
import CallToActions from "../../components/cryto-trading/CallToActions";

const Home_1 = () => {
  let timeoutId;

  const handleLeave = (origin, destination, direction) => {
    clearTimeout(timeoutId);
    return new Promise((resolve, reject) => {
      timeoutId = setTimeout(() => {
        resolve();
      }, 300); // Delay of 0.3 seconds
    });
  };

  return (
    <ReactFullpage
      scrollingSpeed={1000}
      onLeave={(origin, destination, direction) =>
        handleLeave(origin, destination, direction)
      }
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section">
              <Meta title="Home 1" />
              <HeroCarousel />
            </div>
            <div className="section">
              <Top_collection />
            </div>
            {/*
              <div className="section">
                <Slider />

              </div>

              <div className="section">
                         <Latest_Drop />
               
            </div>

              <div className="section">
              <Team />{" "}
            </div>
              <div className="section">
              <Benifits />{" "}
            </div>
        */}{" "}
            <div className="section">
              <Auctions_categories />{" "}
            </div>
            <div className="section">
              <Hottest_Sales />{" "}
            </div>
            <div className="section">
              <CallToActions />{" "}
            </div>
            {/*  <div className="section">
              <Tranding_category />
      </div>*/}
            {/* <div className="section">
              <NewseLatter />
    </div>*/}
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
};

export default Home_1;
