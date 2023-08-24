import React from "react";
import "./AdmissionPage.scss";

import Footer from "../../Components/Footer/Footer";
import { NavBar } from "../../Components/NavBar/NavBar";
import Contact from "../../Components/Contact/Contact";
import PageHeader from "../../Components/PageHeader/PageHeader";
import { Helmet } from "react-helmet-async";
import { documents } from "../../Constants";

function AdmissionPage() {
  return (
    <>
      <Helmet>
        <title>Admission</title>
        <meta
          name="description"
          content="join us today as we provide better education for your child, we most care about you"
        />
        <link rel="canonical" href="/admission" />
      </Helmet>
      <div className="Admission-page-holder">
        <Contact position={"sticky"} />
        <PageHeader title={"Fikiria Kwanza/Admission"} />

        <div className="admissionPage">
          <div className="admissionPage-container">
            <div className="admission-page-title">
              <h1 className="admission-page-title-h1">
                Apply <span className="title-focus">now</span> for
              </h1>
              <h1 className="title-focus">2022/2023</h1>
            </div>
          </div>
          <div className="admission-form">
            <label className="label" htmlFor="name">
              <span>First name:</span> <input type="text" />
            </label>
            <label className="label" htmlFor="name">
              <span>Last name:</span>
              <input type="text" />
            </label>
            <label className="label" htmlFor="name">
              <span>Email address: </span> <input type="text" />
            </label>
            <label className="label" htmlFor="name">
              <span>
                {`Upload field registration form, download `}
                <a href={documents.registration} className="quick-red">
                   here
                </a>
                 {` if you don't have`}
              </span>{" "}
              <input type="file" />
            </label>
            <button className="admission-button">Submit</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AdmissionPage;
