import {
  StyledCard,
  StyledCardContent,
  StyledCardCurrent,
  StyledCardPrevious,
  StyledCardIcon,
} from "./styles";

// icons
import iconEllipsis from "../../../images/icon-ellipsis.svg";

import iconWork from "../../../images/icon-work.svg";
import iconPlay from "../../../images/icon-play.svg";
import iconSelfCare from "../../../images/icon-self-care.svg";
import iconStudy from "../../../images/icon-study.svg";
import iconExercise from "../../../images/icon-exercise.svg";
import iconSocial from "../../../images/icon-social.svg";

const capitalize = (str) => {
  let word = "";

  switch (str) {
    case "daily":
      word = "day";
      break;
    case "weekly":
      word = "week";
      break;
    case "monthly":
      word = "month";
      break;
    default:
      word = "none";
  }

  return word.charAt(0).toUpperCase() + word.slice(1);
};

const Card = ({ title, timeframes: { daily, weekly, monthly }, format }) => {
  return (
    <StyledCard title={title}>
      <StyledCardIcon
        src={
          title === "Work"
            ? iconWork
            : title === "Play"
            ? iconPlay
            : title === "Study"
            ? iconStudy
            : title === "Self Care"
            ? iconSelfCare
            : title === "Exercise"
            ? iconExercise
            : title === "Social"
            ? iconSocial
            : ""
        }
        alt="icon"
      />
      <StyledCardContent>
        <div>
          <h2>{title}</h2> <img src={iconEllipsis} alt="icon-ellipsis" />
        </div>
        <div>
          <StyledCardCurrent>
            {format === "daily"
              ? `${daily.current}`
              : format === "weekly"
              ? `${weekly.current}`
              : format === "monthly"
              ? `${monthly.current}`
              : ""}
            hrs
          </StyledCardCurrent>
          <StyledCardPrevious>
            Last {capitalize(format)} -{" "}
            {format === "daily"
              ? `${daily.previous}`
              : format === "weekly"
              ? `${weekly.previous}`
              : format === "monthly"
              ? `${monthly.previous}`
              : ""}
            hrs
          </StyledCardPrevious>
        </div>
      </StyledCardContent>
    </StyledCard>
  );
};

export default Card;
