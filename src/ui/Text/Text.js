import React from "react";

const Text = ({ content, size, family, weight, className }) => {
  return (
    <p
      style={{
        color: "white",
        fontFamily: family ?? "Nunito",
        fontWeight: weight ?? "400",
      }}
      className={className}
    >
      {content}
    </p>
  );
};

export default Text;
