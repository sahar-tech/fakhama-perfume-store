import React from "react";
import Hero from "./Hero";
import Categories from "./Categories";
import NewArrival from "./NewArrivals";
import PromoBanner from "./PromoBanner";
import BestSeller from "./BestSeller";
import CounDown from "./Countdown";
import Testimonials from "./Testimonials";
import Newsletter from "../Common/Newsletter";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  return (
    <main>

      <Hero />
      <h1>{t('Home.title')}</h1>
      <Categories />
      <NewArrival />
      <PromoBanner />
      <BestSeller />
      <CounDown />
      <Testimonials />
      <Newsletter />
    </main>
  );
};

export default Home;
