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
  callback?: () => void;
  svgProps?: SVG_PROPS;
}

function ButtonArrowPointer({
  direction,
  isDisabled = true,
  svgProps = {},
}: ButtonArrowPointerProps): React.ReactNode {
  const { width, height } = svgProps;
  const colors = useContext(ThemeContext)!;
  const Icon = iconsDirections[direction];
  return (
    <StyledButtonArrowPointer
      className={`button-arrow ${isDisabled ? "button-arrow--disable" : ""}`}
    >
      <Icon
        width={width}
        height={height}
        fill={isDisabled ? colors.icons : colors.gray}
      />
    </StyledButtonArrowPointer>
  );
}

export default ButtonArrowPointer;
