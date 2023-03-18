import React from "react";
import "./GradientText.scss";
const GradientText: React.FC<{
  text: string | undefined;
}> = ({ text }) => {
  return <span className="gradient-text">{text}</span>;
};
export default GradientText;
