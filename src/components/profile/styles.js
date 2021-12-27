import styled from "styled-components";

export const StyledProfile = styled.div`
  background-color: ${(props) => props.theme.colors.darkBlue};
  border-radius: 1.5rem;
  overflow: hidden;

  grid-row: 1 / 3;
`;

export const StyledUserInfo = styled.div`
  padding: 3rem;
  background-color: ${(props) => props.theme.colors.blue};
  border-radius: 1.5rem;

  display: flex;
  align-items: center;

  @media ${(props) => props.theme.breakpoints.lg} {
    padding-bottom: 8.5rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    flex-direction: column;
    align-items: flex-start;
  }

  small {
    font-size: 1.6rem;
    opacity: 0.8;
  }

  h1 {
    font-weight: 300;
    font-size: 2.4rem;
    margin-top: 0.5rem;

    @media ${(props) => props.theme.breakpoints.lg} {
      font-size: 4rem;
    }
  }
`;

export const StyledAvatar = styled.div`
  width: 7rem;
  height: 7rem;
  border: 0.2rem solid #fff;
  border-radius: 50%;
  margin-right: 1.7rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    margin-right: 0rem;
    margin-bottom: 1.7rem;
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    width: 8.5rem;
    height: 8.5rem;
    margin-bottom: 3.9rem;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const StyledFormats = styled.div`
  padding: 2.4rem 3rem;
  display: flex;
  justify-content: space-between;

  @media ${(props) => props.theme.breakpoints.sm} {
    flex-direction: column;

    span:not(:last-child) {
      margin-bottom: 2rem;
    }
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    span:not(:last-child) {
      margin-bottom: 3rem;
    }
  }

  ${(props) =>
    props.format === "daily"
      ? "span:first-child { opacity: 1; }"
      : props.format === "weekly"
      ? "span:nth-child(2) { opacity: 1; }"
      : props.format === "monthly"
      ? "span:last-child { opacity: 1; }"
      : ""}

  span {
    font-size: 1.8rem;
    font-weight: 400;
    opacity: 0.6;
    transition: all 200ms ease;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }
`;
