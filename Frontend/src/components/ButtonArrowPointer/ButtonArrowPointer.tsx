import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import StyledButtonArrowPointer from "./StyledButtonArrowPointer.ts";
import ArrowDonw from "../../assets/icons/Arrow-down.svg";
import ArrowLeft from "../../assets/icons/Arrow-left.svg";
import ArrowUp from "../../assets/icons/Arrow-up.svg";
import ArrowRight from "../../assets/icons/Arrow-right.svg";

import { SVG_PROPS } from "../../types/svg.ts";

// Notice that Icon is an Alias for svg element, check vite.config.ts for more details.
const iconsDirections = {
  right: ArrowRight,
  left: ArrowLeft,
  up: ArrowUp,
  down: ArrowDonw,
};

interface ButtonArrowPointerProps {
  direction: keyof typeof iconsDirections;
  isDisabled?: boolean;
  onClick?: () => void;
  svgProps?: SVG_PROPS;
}

function ButtonArrowPointer({
  direction,
  isDisabled = true,
  onClick,
}: ButtonArrowPointerProps): React.ReactNode {
  const colors = useContext(ThemeContext)!;
  const Icon = iconsDirections[direction];
  return (
    <StyledButtonArrowPointer
      className={`button-arrow ${isDisabled ? "button-arrow--disable" : ""}`}
      disabled={isDisabled}
      onClick={onClick}
    >
      {// @ts-ignore
      <Icon width={16} height={16} fill={isDisabled ? colors.icons : colors.gray} />}
    </StyledButtonArrowPointer>
  );
}

export default ButtonArrowPointer;
