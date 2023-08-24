import React from "react";
import "./Home.scss";
import { NavBar } from "../../Components/NavBar/NavBar";
import Slider from "../../Components/Slider/Slider";

import Testimonial from "../Testimonial/Testimonial";
import ExtraNav from "../../Components/NavBar/ExtraNav";
import About from "../About/About";
import Academics from "../Academics/Academics";
import Admission from "../Admission/Admission";
import NumCount from "../Testimonial/NumCount";
import ContactUs from "../Contactus/ContactUs";
import Footer from "../../Components/Footer/Footer";
import Contact from "../../Components/Contact/Contact";

import Calender from "../../Components/Resources/ResourcesPages/Calender/Calender";
import Whatsapp from "../../Components/Whatsapp/Whatsapp";
import TodayQuote from "../../Components/TodayQuote/TodayQuote";
import QuickLink from "../../Components/QuickLink/QuickLink";
import Copyright from "../../Components/Copyright/Copyright";
import QuickImage from "../../Components/QuickImage/QuickImage";
import QuickText from "../../Components/QuickImage/QickText";
function Home() {
  return (
    <div className="Home" id="home">
      <Contact position={"sticky"}/>
      <NavBar />
      <Slider />
      <Whatsapp />
      <QuickLink />
      <ExtraNav />
      <QuickImage />
      <TodayQuote />
      <About />
      <QuickText />
      <Academics />
      <Calender />
      <Admission />
      <ContactUs />
      <NumCount />
      <Testimonial />
      <Footer />
      <Copyright />
    </div>
  );
}

export default Home;
