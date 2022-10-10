import React, { useEffect, useState } from "react";
import HeroSliderControls from "../HeroSliderControls";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaDribbble,
} from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import FullScreenSlider from "../FullScreenSlider";
import Button from "../Button";
import Aos from "aos";

import "aos/dist/aos.css";
import "./Hero.scss";

const Hero = () => {
  const [image, setImage] = useState("");
  const [openSlider, setOpenSlider] = useState(false);

  const images = [
    {
      id: 1,
      src: "https://media.istockphoto.com/photos/modern-living-room-interior-3d-render-picture-id1293762741?b=1&k=20&m=1293762741&s=170667a&w=0&h=2RI8SmBN4MrEZuTvdwRzaeB887x-dukFcQBpyQ-qwS4=",
    },
    {
      id: 2,
      src: "https://media.istockphoto.com/photos/luxury-furniture-goods-picture-id1350859272?b=1&k=20&m=1350859272&s=170667a&w=0&h=wZ3TXnV30t0-vPXPJSfft8oqmsiO0rKC0EWo795Vw0c=",
    },
    {
      id: 3,
      src: "https://wallpaperaccess.com/full/2076086.jpg",
    },
    {
      id: 4,
      src: "https://wallpaperaccess.com/full/2076083.jpg",
    },
    {
      id: 5,
      src: "https://media.istockphoto.com/photos/modern-living-room-interior-3d-render-picture-id1293762741?b=1&k=20&m=1293762741&s=170667a&w=0&h=2RI8SmBN4MrEZuTvdwRzaeB887x-dukFcQBpyQ-qwS4=",
    },
  ];

  useEffect(() => {
    setImage(images[0].src);
    Aos.init({ duration: 1000 });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <section className="hero__section">
        {image && (
          <div
            className="bgk__imgae"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        )}
        <div className="container">
          <div className="hero__content">
            <div className="hero__text">
              <h1 className="hero__title" data-aos="fade-up">
                <span>WE CAN</span>{" "}
                <span data-aos="fade-up" data-aos-delay="150">
                  Wooden Products
                </span>
              </h1>
              <p data-aos="fade-up" data-aos-delay="300">
                WE CAN is a B2B and B2C company dedicated to the design and manufacture of wooden products in several categories.
              </p>
              <div className="hero__links d-flex flex-column  justify-content-between">
                <div data-aos="fade-up" data-aos-delay="350">
                  <Button>Work With Us</Button>
                </div>
                <ul className="d-flex align-items-center">
                  <li data-aos="fade-up" data-aos-delay="400">
                    <a href="#home" target="_blank">
                      <FaFacebookF />
                    </a>
                  </li>
                  <li data-aos="fade-up" data-aos-delay="500">
                    <a href="#home" target="_blank">
                      <FaTwitter />
                    </a>
                  </li>
                  <li data-aos="fade-up" data-aos-delay="600">
                    <a href="#home" target="_blank">
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li data-aos="fade-up" data-aos-delay="700">
                    <a href="#home" target="_blank">
                      <GrInstagram />
                    </a>
                  </li>
                  <li data-aos="fade-up" data-aos-delay="800">
                    <a href="#home" target="_blank">
                      <FaDribbble />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="hero__rigth"
              data-aos="fade-left"
              data-aos-delay="350"
            >
              <HeroSliderControls
                images={images}
                setImage={setImage}
                onOpenSlider={setOpenSlider}
              />
            </div>
          </div>
        </div>
      </section>
      {openSlider && <FullScreenSlider onClose={setOpenSlider} />}
    </>
  );
};

export default Hero;
