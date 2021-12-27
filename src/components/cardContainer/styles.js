import styled from "styled-components";

export const StyledCardContainer = styled.div`
  width: calc(100% - 2 * 2.5rem);
  max-width: 111rem;
  margin: 8rem auto;

  @media ${(props) => props.theme.breakpoints.lg} {
    margin: 0 auto;
    grid-template-rows: repeat(3, 25rem);
  }

  // Bug fix
  @media screen and (min-width: 1140px) {
    grid-template-rows: repeat(2, 25rem);
  }

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
  grid-gap: 3rem;
`;
