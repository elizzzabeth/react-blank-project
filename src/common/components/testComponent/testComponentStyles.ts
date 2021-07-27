import styled from "styled-components"

export const StyledBox = styled.div`
  text-align: center;

  h1 {
    color: ${(props) => props.theme.main.colors.primary};
  }
`
