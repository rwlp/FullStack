import React from "react";
import StyledButton from "./StyledButton.ts";

interface ButtonProps {
  text: string;
  isSelected?: boolean;
  onclick?: () => void;
}

function Button({ text, isSelected = true }: ButtonProps): React.ReactNode {
  return (
    <StyledButton
      className={`button ${isSelected ? "button--isSelected" : ""}`}
    >
      {text}
    </StyledButton>
  );
}

export default Button;
