import styled from "styled-components";

export const StyledCard = styled.div`
  background-color: ${(props) =>
    props.title === "Work"
      ? props.theme.colors.lightRedWork
      : props.title === "Play"
      ? props.theme.colors.softBluePlay
      : props.title === "Study"
      ? props.theme.colors.lightRedStudy
      : props.title === "Exercise"
      ? props.theme.colors.limeGreenExercise
      : props.title === "Social"
      ? props.theme.colors.violetSocial
      : props.title === "Self Care"
      ? props.theme.colors.softOrangeSelfCare
      : ""};

  border-radius: 1.5rem;

  overflow: hidden;
  min-height: 16rem;
  display: flex;
  align-items: flex-end;
  position: relative;
  cursor: pointer;
`;

export const StyledCardIcon = styled.img`
  position: absolute;
  top: -0.5rem;
  right: 0;
  z-index: 0;
`;

export const StyledCardContent = styled.div`
  background-color: ${(props) => props.theme.colors.darkBlue};
  border-radius: 1.5rem;
  width: 100%;
  z-index: 1;

  @media ${(props) => props.theme.breakpoints.lg} {
    height: 20rem;
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.desaturatedBlue};
  }

  div:first-child {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2.5rem 2.5rem 1rem 2.5rem;

    h2 {
      font-size: 1.8rem;
      font-weight: 500;

      @media ${(props) => props.theme.breakpoints.lg} {
        margin-bottom: 2.2rem;
      }
    }

    img {
      cursor: pointer;
    }
  }

  div:last-child {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0rem 2.5rem 2.5rem 2.5rem;

    @media ${(props) => props.theme.breakpoints.lg} {
      flex-direction: column;
      align-items: flex-start;
    }
  }
`;

export const StyledCardCurrent = styled.h3`
  font-size: 3.2rem;
  font-weight: 300;

  @media ${(props) => props.theme.breakpoints.lg} {
    font-size: 5.5rem;
    margin-bottom: 1rem;
  }
`;

export const StyledCardPrevious = styled.span`
  font-size: 1.5rem;
  font-weight: 300;
  opacity: 0.7;
`;
