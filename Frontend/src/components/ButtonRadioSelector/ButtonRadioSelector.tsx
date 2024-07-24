import React from "react";
import StyledButtonRadioSelector from "./StyledButtonRadioSelector.ts";

interface ButtonRadioSelectorProps {
  color: string;
  isSelected?: boolean;
}

function ButtonRadioSelector({
  color,
  isSelected = false,
}: ButtonRadioSelectorProps): React.ReactNode {
  return (
    <StyledButtonRadioSelector
      className={`radio-button ${isSelected ? "radio-button--isSelected" : ""}`}
      $mainColor={color}
    />
  );
}

export default ButtonRadioSelector;
