import React, { useEffect, useState } from "react";
import "./About.scss";
import { images } from "../../Constants";
import { motion } from "framer-motion";

import Title from "../../Components/Title/Title";

export default function About() {
  const [image, setimage] = useState([]);
  useEffect(() => {
    if (window.screen.availWidth < 601) {
      setimage([images.student_class1]);
    } else {
      setimage([images.student_class1, images.school_staffs]);
    }
  }, []);
  return (
    <div className="About" id="about_us">
      <div className="about-container">
        <Title title={"About Fikiria kwanza Primary and Secondary Schools"} />

        <div className="about-description">
          <div className="about-description-details">
            <p className="about-paragraph">
              Fikiria Kwanza Primary and Secondary schools is a reputable educational institution known
              for providing a comprehensive and balanced education to students
              in the region. Established with the vision of fostering academic
              excellence and holistic development, Fikiria Kwanza schools offers a wide
              range of subjects, including science, arts, and business, to cater
              to the diverse interests and aspirations of its students.
            </p>
            <p className="about-paragraph">
              At Fikiria Kwanza, we prioritize academic excellence and offer a
              well-rounded curriculum that encompasses science, arts, Literature, and
              business subjects. This ensures that students have the opportunity
              to explore their interests, discover their strengths, and make
              informed decisions about their future career paths.
            </p>
          </div>

          <div className="about-images-container">
            {image.map((item, index) => {
              return (
                <div className="about-images" key={index}>
                  <img src={item} alt={item} className="about-image" />
                </div>
              );
            })}
          </div>
        </div>
        <button className="about-us-button">
          <a href="/about">Read More</a>
        </button>
      </div>
    </div>
  );
}
