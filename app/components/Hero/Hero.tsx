import React from "react";
import ButtonBlue from "../button/ButtonBlue";
import ButtonRed from "../button/ButtonRed";
import Image from "next/image";
import HeroImg from "@/public/images/hero.svg";

const Hero = () => {
  return (
    <div className="h-[70vh] lg:h-[88vh] md:h-[80vh] sm:h-[75vh] flex items-center flex-col justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-5 items-center w-[80%] mx-auto">
        <div className="col-span-2">
          <h1
            data-aos="fade-right"
            className="text-[26px] md:text[35px] lg:text-[40px] mb-[1rem] font-bold text-[#02073e] leading-[2.4rem] md:leading-[4rem]"
          >
            Explore Innovative Paths to Cultivate Your Business
          </h1>
          <p
            data-aos="fade-left"
            data-aos-delay="200"
            className="md:text-[17px] text-[15px] mb-[2rem] text-black opacity-90 font-[400]"
          >
            Discover groundbreaking strategies to nurture and expand your
            business ventures through inventive avenues. Explore innovative
            paths to unlock your businesss full potential.
          </p>
          <div
            data-aos="zoom-in"
            data-aos-delay="400"
            className="flex items-center space-x-4 md:space-x-6"
          >
            <ButtonBlue text="Get Started" />
            <ButtonRed text="Explore Features" />
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-delay="600"
          className="col-span-3 hidden sm:block"
        >
          <Image src={HeroImg} alt="Hero" />
        </div>
      </div>
    </div>
  );
};

export default Hero;