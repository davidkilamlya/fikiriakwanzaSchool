import React, { useRef, useState } from "react";

import "./Gallery.scss";
import images from "../../Constants/images";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

import { easeInOut, motion } from "framer-motion";
import { MdCancel } from "react-icons/md";
import { useLocation } from "react-router-dom";
import image0 from "../../Assets/official_images/official_webp/_AX_1867.webp";
import image1 from "../../Assets/official_images/official_webp/_AX_1868.webp";
import image2 from "../../Assets/official_images/official_webp/_AX_1869.webp";
import image3 from "../../Assets/official_images/official_webp/_AX_1871.webp";
import image4 from "../../Assets/official_images/official_webp/_AX_1872.webp";
import image5 from "../../Assets/official_images/official_webp/_AX_1873.webp";
import image6 from "../../Assets/official_images/official_webp/_AX_1874.webp";
import image7 from "../../Assets/official_images/official_webp/_AX_1875.webp";
import image8 from "../../Assets/official_images/official_webp/_AX_1876.webp";
import image9 from "../../Assets/official_images/official_webp/_AX_1877.webp";
import image10 from "../../Assets/official_images/official_webp/_AX_1887.webp";
import image11 from "../../Assets/official_images/official_webp/_AX_1888.webp";
import image12 from "../../Assets/official_images/official_webp/_AX_1889.webp";
import image13 from "../../Assets/official_images/official_webp/_AX_1890.webp";
import image14 from "../../Assets/official_images/official_webp/_AX_1892.webp";
import image15 from "../../Assets/official_images/official_webp/_AX_1893.webp";
// import image16 from "../../Assets/official_images/official_webp/_AX_1895.webp";
// import image17 from "../../Assets/official_images/official_webp/_AX_1898.webp";
// import image18 from "../../Assets/official_images/official_webp/_AX_1899.webp";
// import image19 from "../../Assets/official_images/official_webp/_AX_1905.webp";
// import image20 from "../../Assets/official_images/official_webp/_AX_1906.webp";
// import image21 from "../../Assets/official_images/official_webp/_AX_1907.webp";
// import image22 from "../../Assets/official_images/official_webp/_AX_1908.webp";
// import image23 from "../../Assets/official_images/official_webp/_AX_1910.webp";
// import image24 from "../../Assets/official_images/official_webp/_AX_1911.webp";
// import image25 from "../../Assets/official_images/official_webp/_AX_1912.webp";
// import image26 from "../../Assets/official_images/official_webp/_AX_1914.webp";
// import image27 from "../../Assets/official_images/official_webp/_AX_1915.webp";
// import image28 from "../../Assets/official_images/official_webp/_AX_1916.webp";
// import image29 from "../../Assets/official_images/official_webp/_AX_1917.webp";
// import image30 from "../../Assets/official_images/official_webp/_AX_1918.webp";
// import image31 from "../../Assets/official_images/official_webp/_AX_1924.webp";
// import image32 from "../../Assets/official_images/official_webp/_AX_1925.webp";
// import image33 from "../../Assets/official_images/official_webp/_AX_1926.webp";
// import image34 from "../../Assets/official_images/official_webp/_AX_1927.webp";
// import image35 from "../../Assets/official_images/official_webp/_AX_1928.webp";
// import image36 from "../../Assets/official_images/official_webp/_AX_1929.webp";
// import image37 from "../../Assets/official_images/official_webp/_AX_1930.webp";
// import image38 from "../../Assets/official_images/official_webp/_AX_1936.webp";
// import image39 from "../../Assets/official_images/official_webp/_AX_1937.webp";
// import image40 from "../../Assets/official_images/official_webp/_AX_1939.webp";
// import image41 from "../../Assets/official_images/official_webp/_AX_1940.webp";
// import image42 from "../../Assets/official_images/official_webp/_AX_1941.webp";
// import image43 from "../../Assets/official_images/official_webp/_AX_1943.webp";
// import image44 from "../../Assets/official_images/official_webp/_AX_1944.webp";
// import image45 from "../../Assets/official_images/official_webp/_AX_1945.webp";
// import image46 from "../../Assets/official_images/official_webp/_AX_1946.webp";
// import image47 from "../../Assets/official_images/official_webp/_AX_1947.webp";
// import image48 from "../../Assets/official_images/official_webp/_AX_1948.webp";
// import image49 from "../../Assets/official_images/official_webp/_AX_1951.webp";
// import image50 from "../../Assets/official_images/official_webp/_AX_1953.webp";
// import image51 from "../../Assets/official_images/official_webp/_AX_1955.webp";
// import image52 from "../../Assets/official_images/official_webp/_AX_1959.webp";
// import image53 from "../../Assets/official_images/official_webp/_AX_1961.webp";
// import image54 from "../../Assets/official_images/official_webp/_AX_1966.webp";
// import image55 from "../../Assets/official_images/official_webp/_AX_1967.webp";
// import image56 from "../../Assets/official_images/official_webp/_AX_1970.webp";
// import image57 from "../../Assets/official_images/official_webp/_AX_1974.webp";
// import image58 from "../../Assets/official_images/official_webp/_AX_1975.webp";
// import image59 from "../../Assets/official_images/official_webp/_AX_1976.webp";
// import image60 from "../../Assets/official_images/official_webp/_AX_1977.webp";
// import image61 from "../../Assets/official_images/official_webp/_AX_1978.webp";
// import image62 from "../../Assets/official_images/official_webp/_AX_1979.webp";
// import image63 from "../../Assets/official_images/official_webp/_AX_1980.webp";
// import image64 from "../../Assets/official_images/official_webp/_AX_1981.webp";
// import image65 from "../../Assets/official_images/official_webp/_AX_1986.webp";
// import image66 from "../../Assets/official_images/official_webp/_AX_1989.webp";
// import image67 from "../../Assets/official_images/official_webp/_AX_1990.webp";
// import image68 from "../../Assets/official_images/official_webp/_AX_1994.webp";
// import image69 from "../../Assets/official_images/official_webp/_AX_1995.webp";
// import image70 from "../../Assets/official_images/official_webp/_AX_1996.webp";
// import image71 from "../../Assets/official_images/official_webp/_AX_1997.webp";
// import image72 from "../../Assets/official_images/official_webp/_AX_1999.webp";
// import image73 from "../../Assets/official_images/official_webp/_AX_2001.webp";
// import image74 from "../../Assets/official_images/official_webp/_AX_2005.webp";
// import image75 from "../../Assets/official_images/official_webp/_AX_2006.webp";
// import image76 from "../../Assets/official_images/official_webp/_AX_2008.webp";
// import image77 from "../../Assets/official_images/official_webp/_AX_2014.webp";
// import image78 from "../../Assets/official_images/official_webp/_AX_2016.webp";
// import image79 from "../../Assets/official_images/official_webp/_AX_2018.webp";
// import image80 from "../../Assets/official_images/official_webp/_AX_2020.webp";
// import image81 from "../../Assets/official_images/official_webp/_AX_2021.webp";
// import image82 from "../../Assets/official_images/official_webp/_AX_2022.webp";
// import image83 from "../../Assets/official_images/official_webp/_AX_2025.webp";
// import image84 from "../../Assets/official_images/official_webp/_AX_2028.webp";
// import image85 from "../../Assets/official_images/official_webp/_AX_2030.webp";
// import image86 from "../../Assets/official_images/official_webp/_AX_2031.webp";
// import image87 from "../../Assets/official_images/official_webp/_AX_2033.webp";
// import image88 from "../../Assets/official_images/official_webp/_AX_2034.webp";
// import image89 from "../../Assets/official_images/official_webp/_AX_2035.webp";
// import image90 from "../../Assets/official_images/official_webp/_AX_2036.webp";
// import image91 from "../../Assets/official_images/official_webp/_AX_2037.webp";
// import image92 from "../../Assets/official_images/official_webp/_AX_2038.webp";
import image93 from "../../Assets/official_images/official_webp/_AX_2042.webp";
import image94 from "../../Assets/official_images/official_webp/_AX_2045.webp";
// import image95 from "../../Assets/official_images/official_webp/_AX_2046.webp";
// import image96 from "../../Assets/official_images/official_webp/_AX_2047.webp";
// import image97 from "../../Assets/official_images/official_webp/_AX_2048.webp";
// import image98 from "../../Assets/official_images/official_webp/_AX_2050.webp";
// import image99 from "../../Assets/official_images/official_webp/_AX_2051.webp";
// import image100 from "../../Assets/official_images/official_webp/_AX_2053.webp";
// import image101 from "../../Assets/official_images/official_webp/_AX_2056.webp";
// import image102 from "../../Assets/official_images/official_webp/_AX_2059.webp";
// import image103 from "../../Assets/official_images/official_webp/_AX_2060.webp";
// import image104 from "../../Assets/official_images/official_webp/_AX_2062.webp";
// import image105 from "../../Assets/official_images/official_webp/_AX_2069.webp";
// import image106 from "../../Assets/official_images/official_webp/_AX_2070.webp";
// import image107 from "../../Assets/official_images/official_webp/_AX_2071.webp";
// import image108 from "../../Assets/official_images/official_webp/boys_view.webp";
// import image109 from "../../Assets/official_images/official_webp/fun_time.webp";
// import image110 from "../../Assets/official_images/official_webp/fun_time1.webp";
// import image111 from "../../Assets/official_images/official_webp/ladies_view.webp";
// import image112 from "../../Assets/official_images/official_webp/practical_lab.webp";
// import image113 from "../../Assets/official_images/official_webp/school_staff1.webp";
// import image114 from "../../Assets/official_images/official_webp/school_staff1.xcf";
// import image115 from "../../Assets/official_images/official_webp/school_staff11.png";
// import image116 from "../../Assets/official_images/official_webp/school_staffs.webp";
// import image117 from "../../Assets/official_images/official_webp/school_staffs.resized.webp";
// import image118 from "../../Assets/official_images/official_webp/school_staffs3.webp";
// import image119 from "../../Assets/official_images/official_webp/school_staffs4.webp";
// import image120 from "../../Assets/official_images/official_webp/school_view.webp";
// import image121 from "../../Assets/official_images/official_webp/school_view1.webp";
// import image122 from "../../Assets/official_images/official_webp/single_student.webp";
// import image123 from "../../Assets/official_images/official_webp/sports_view.webp";
// import image124 from "../../Assets/official_images/official_webp/two_students_library.webp";
// import image125 from "../../Assets/official_images/official_webp/two_students_library.resized.webp";
import PageHeader from "../PageHeader/PageHeader";
import { Helmet } from "react-helmet-async";
// Use the imported images as needed
const officialImages = [
  { image: image0, title: "Image 0" },
  { image: image1, title: "Image 1" },
  { image: image2, title: "Image 2" },
  { image: image3, title: "Image 3" },
  { image: image4, title: "Image 4" },
  { image: image5, title: "Image 5" },
  { image: image6, title: "Image 6" },
  { image: image7, title: "Image 7" },
  { image: image8, title: "Image 8" },
  { image: image9, title: "Image 9" },
  { image: image10, title: "Image 10" },
  { image: image11, title: "Image 11" },
  { image: image12, title: "Image 12" },
  { image: image13, title: "Image 13" },
  { image: image14, title: "Image 14" },
  { image: image15, title: "Image 15" },
  // { image: image16, title: "Image 16" },
  // { image: image17, title: "Image 17" },
  // { image: image18, title: "Image 18" },
  // { image: image19, title: "Image 19" },
  // { image: image20, title: "Image 20" },
  // { image: image21, title: "Image 21" },
  // { image: image22, title: "Image 22" },
  // { image: image23, title: "Image 23" },
  // { image: image24, title: "Image 24" },
  // { image: image25, title: "Image 25" },
  // { image: image26, title: "Image 26" },
  // { image: image27, title: "Image 27" },
  // { image: image28, title: "Image 28" },
  // { image: image29, title: "Image 29" },
  // { image: image30, title: "Image 30" },
  // { image: image31, title: "Image 31" },
  // { image: image32, title: "Image 32" },
  // { image: image33, title: "Image 33" },
  // { image: image34, title: "Image 34" },
  // { image: image35, title: "Image 35" },
  // { image: image36, title: "Image 36" },
  // { image: image37, title: "Image 37" },
  // { image: image38, title: "Image 38" },
  // { image: image39, title: "Image 39" },
  // { image: image40, title: "Image 40" },
  // { image: image41, title: "Image 41" },
  // { image: image42, title: "Image 42" },
  // { image: image43, title: "Image 43" },
  // { image: image44, title: "Image 44" },
  // { image: image45, title: "Image 45" },
  // { image: image46, title: "Image 46" },
  // { image: image47, title: "Image 47" },
  // { image: image48, title: "Image 48" },
  // { image: image49, title: "Image 49" },
  // { image: image50, title: "Image 50" },
  // { image: image51, title: "Image 51" },
  // { image: image52, title: "Image 52" },
  // { image: image53, title: "Image 53" },
  // { image: image54, title: "Image 54" },
  // { image: image55, title: "Image 55" },
  // { image: image56, title: "Image 56" },
  // { image: image57, title: "Image 57" },
  // { image: image58, title: "Image 58" },
  // { image: image59, title: "Image 59" },
  // { image: image60, title: "Image 60" },
  // { image: image61, title: "Image 61" },
  // { image: image62, title: "Image 62" },
  // { image: image63, title: "Image 63" },
  // { image: image64, title: "Image 64" },
  // { image: image65, title: "Image 65" },
  // { image: image66, title: "Image 66" },
  // { image: image67, title: "Image 67" },
  // { image: image68, title: "Image 68" },
  // { image: image69, title: "Image 69" },
  // { image: image70, title: "Image 70" },
  // { image: image71, title: "Image 71" },
  // { image: image72, title: "Image 72" },
  // { image: image73, title: "Image 73" },
  // { image: image74, title: "Image 74" },
  // { image: image75, title: "Image 75" },
  // { image: image76, title: "Image 76" },
  // { image: image77, title: "Image 77" },
  // { image: image78, title: "Image 78" },
  // { image: image79, title: "Image 79" },
  // { image: image80, title: "Image 80" },
  // { image: image81, title: "Image 81" },
  // { image: image82, title: "Image 82" },
  // { image: image83, title: "Image 83" },
  // { image: image84, title: "Image 84" },
  // { image: image85, title: "Image 85" },
  // { image: image86, title: "Image 86" },
  // { image: image87, title: "Image 87" },
  // { image: image88, title: "Image 88" },
  // { image: image89, title: "Image 89" },
  // { image: image90, title: "Image 90" },
  // { image: image91, title: "Image 91" },
  // { image: image92, title: "Image 92" },
  { image: image93, title: "Image 16" },
  { image: image94, title: "Image 17" },
  // { image: image95, title: "Image 95" },
  // { image: image96, title: "Image 96" },
  // { image: image97, title: "Image 97" },
  // { image: image98, title: "Image 98" },
  // { image: image99, title: "Image 99" },
  // { image: image100, title: "Image 100" },
  // { image: image101, title: "Image 101" },
  // { image: image102, title: "Image 102" },
  // { image: image103, title: "Image 103" },
  // { image: image104, title: "Image 104" },
  // { image: image105, title: "Image 105" },
  // { image: image106, title: "Image 106" },
  // { image: image107, title: "Image 107" },
  // { image: image108, title: "Image 108" },
  // { image: image109, title: "Image 109" },
  // { image: image110, title: "Image 110" },
  // { image: image111, title: "Image 111" },
  // { image: image112, title: "Image 112" },
  // { image: image113, title: "Image 113" },
  // { image: image114, title: "Image 114" },
  // { image: image115, title: "Image 115" },
  // { image: image116, title: "Image 116" },
  // { image: image117, title: "Image 117" },
  // { image: image118, title: "Image 118" },
  // { image: image119, title: "Image 119" },
  // { image: image120, title: "Image 120" },
  // { image: image121, title: "Image 121" },
  // { image: image122, title: "Image 122" },
  // { image: image123, title: "Image 123" },
  // { image: image124, title: "Image 124" },
  // { image: image125, title: "Image 125" },
];

function Gallery() {
  const imageRef = useRef();
  const galleryRef = useRef();
  const [imageHolder, setImageHolder] = useState();
  const { pathname, search } = useLocation();
  console.log("path ", pathname, " search ", search);

  const handleClick = (id) => {
    setImageHolder(officialImages[id].image);
    imageRef.current.style.height = "100%";
    imageRef.current.style.width = "100vw";
    imageRef.current.style.padding = "50px";
  };
  const handleCancel = () => {
    imageRef.current.style.height = "0vh";
    imageRef.current.style.padding = "0px";
  };
  return (
    <div>
      <Helmet>
        <title>Gallery</title>
        <meta name="description" content="View school gallery" />
        <link rel="canonical" href="/gallery" />
      </Helmet>
      <Contact position={"sticky"} />
      <div className="gallery-container">
        <PageHeader title={"Fikiria Kwanza/Gallery"} />
        <motion.div
          initial={{ y: [0, 100] }}
          whileInView={{ y: [-300, 0] }}
          transition={{ duration: 2, ease: easeInOut }}
          className="gallery-card-image"
          ref={galleryRef}
        >
          {officialImages.map((item, index) => {
            console.log(item, index);
            return (
              <div className="gallery-card" key={index}>
                <div className="gallery-image">
                  {item.image ? (
                    <img
                      src={item.image}
                      onClick={() => handleClick(index)}
                      alt="gallery"
                      className="gallery-image-image"
                    />
                  ) : (
                    <h4>loading.....</h4>
                  )}
                </div>
                <div className="gallery-tittle">
                  <span className="gallery-tittle-h2">{item.title}</span>
                  {/* <span className="gallery-tittle-date">{item.date}</span> */}
                </div>
              </div>
            );
          })}
          <div
            className="image-holder"
            ref={imageRef}
            onClick={() => handleCancel()}
          >
            <div className="image-holder-icon">
              <MdCancel
                className="cancel-icon"
                onClick={() => handleCancel()}
              />
            </div>
            <div className="image-holder-container">
              {" "}
              <img
                src={imageHolder}
                alt="gallery"
                className="image-holder-image"
                onClick={() => handleCancel()}
              />
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}

export default Gallery;
