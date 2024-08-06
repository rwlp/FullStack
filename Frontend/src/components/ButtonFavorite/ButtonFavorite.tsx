import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import StyledButtonFavorite from "./StyledButtonFavorite.ts";
import HeartIconEmpty from "../../assets/icons/HeartLike-empty.svg";
import HeartIconFilled from "../../assets/icons/HearLike-filled.svg";

interface ButtonFavoriteProps {
  isFavorite?: boolean;
}

function ButtonFavorite({
  isFavorite = false,
}: ButtonFavoriteProps): React.ReactNode {
  const { likeFilledColor, likeEmptyColor } = useContext(ThemeContext)!;

  return (
    <StyledButtonFavorite
      className={`button-favorite ${isFavorite ? "button-favorite--selected" : ""}`}
    >
      {isFavorite
      // @ts-ignore
      ? <HeartIconFilled fill={likeFilledColor} />
      // @ts-ignore      
      : <HeartIconEmpty fill={likeEmptyColor} />
      }
    </StyledButtonFavorite>
  );
}

export default ButtonFavorite;
