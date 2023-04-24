"use client";

import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CharactersSlider = ({ data }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  const getComicImage = (character) => {
    if (
      character.thumbnail &&
      !character.thumbnail.path.includes("image_not_available")
    ) {
      return (
        <Image
          src={`${character.thumbnail.path}/portrait_uncanny.jpg`}
          alt="slides"
          width={240}
          height={150}
          key={character.id}
          style={{ padding: "0 4px" }}
        />
      );
    }
  };

  return (
    <div>
      <Carousel responsive={responsive}>
        {data.results.map((character) => {
          return getComicImage(character);
        })}
      </Carousel>
      ;
    </div>
  );
};

export default CharactersSlider;
