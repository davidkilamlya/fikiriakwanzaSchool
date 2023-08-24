import React from "react";
import "./Academics.scss";
import Title from "../../Components/Title/Title";

import { images } from "../../Constants";

function Academics() {
  const academicsDetails = [
    {
      image: images.student_practical,
      title: "Science",
      description:
        "The Science Department at Fikiria Kwanza  is dedicated to fostering a deep understanding of scientific principles and promoting curiosity in the natural world. Our experienced faculty members guide students through engaging hands-on experiments, lab work, and interactive discussions.",
    },
    {
      image: images.two_teachers,
      title: "Arts",
      description:
        "At Fikiria Kwanza, the Arts Department celebrates creativity and self-expression. Through our diverse range of artistic subjects—visual arts, music, drama, and dance—we provide students with a nurturing environment to explore their talents and develop their artistic skills.",
    },
    {
      image: images.school_view,
      title: "Literature",
      description:
        "Immerse yourself in the world of literature at Fikiria Kwanza. Our Literature module offers a rich and engaging exploration of various literary genres, authors, and works from different time periods and cultures.Unleash your imagination and embark on a literary journey with us at Fikiria Kwanza.",
    },
  ];
  return (
    <>
      <Title title={"Academics/Curriculum"} />
      <div className="academics" id="academics">
        <div className="academics-container">
          <div className="academic-card-container">
            {academicsDetails.map((item, index) => {
              return (
                <div className="academic-card" key={index}>
                  <div
                    className="academic-card-image"
                    style={{
                      backgroundImage: `url(${item.image})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "100%",
                      backgroundPosition: "center",
                    }}
                  >
                    <a href="/departments" className="academic-card-title-link">
                      <div className="academic-card-title">
                        <p className="academic-title">{item.title}</p>
                      </div>
                    </a>
                  </div>
                  <div className="academic-card-description">
                    <p className="academic-description">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          {/* <div className="academic-button-holder"> */}
          {/* <a href="/departments" className="academic-button-link"> */}
          {/* <button className="academic-button">Read more</button> */}
          {/* </a> */}
          {/* </div> */}
        </div>
      </div>
    </>
  );
}

export default Academics;
