import React from "react";
import StyledButtonNumber from "./StyledButtonNumber.ts";

interface ButtonNumberProps {
  value: number;
  isSelected: boolean;
  onClick?: () => void;
}

function ButtonNumber({
  value,
  isSelected = false,
  onClick,
}: ButtonNumberProps): React.ReactNode {
  return (
    <StyledButtonNumber className={`button-number ${isSelected ? '--isSelected': ''}`} onClick={onClick} >
      <div className="button-number__value">{value}</div>
    </StyledButtonNumber>
  );
}

export default ButtonNumber;
