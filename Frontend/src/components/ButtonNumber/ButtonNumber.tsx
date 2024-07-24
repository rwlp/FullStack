import React from "react";
import StyledButtonNumber from "./StyledButtonNumber.ts";

interface ButtonNumberProps {
  value: number;
  isSelected: boolean;
  // callback: () => void;
}

function ButtonNumber({
  value,
  isSelected = false,
}: ButtonNumberProps): React.ReactNode {
  return (
    <StyledButtonNumber className="button-number" $isSelected={isSelected}>
      <div className="button-number__value">{value}</div>
    </StyledButtonNumber>
  );
}

export default ButtonNumber;
