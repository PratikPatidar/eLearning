import React from "react";

const HighlightText = ({ text }) => {
  return (
    <span className="bg-gradient-to-t from-[#FAC576] via-[#86A8E7] to-[#000] text-transparent bg-clip-text font-bold">
      {" "}
      {text}
    </span>
  );
};

export default HighlightText;