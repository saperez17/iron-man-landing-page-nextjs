"use client";
import React from "react";

import BusinessmanSVG from "../../../public/icons/BusinessmanIcon.svg";
import EngineerSVG from "../../../public/icons/EngineerIcon.svg";
import GeniusSVG from "../../../public/icons/GeniusIcon.svg";
import TacticianSVG from "../../../public/icons/TacticianIcon.svg";
import Image from "next/image";

const iconTypes = {
  businessman: () => BusinessmanSVG,
  engineer: () => EngineerSVG,
  genius: () => GeniusSVG,
  tactician: () => TacticianSVG,
};

const CharacterIcon = ({ type = "genius", width, height, className }) => {
  return (
    <>
      <Image
        src={iconTypes[type]()}
        height={width ?? 32}
        width={height ?? 32}
        alt={`image of ${type}`}
        className={className}
      />
    </>
  );
};

export default CharacterIcon;
