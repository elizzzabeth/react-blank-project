import React from "react"

// types
import { TestComponentPropsType } from "./TestComponentTypes"
// styles
import { StyledBox } from "./testComponentStyles"

const TestComponent: React.FC<TestComponentPropsType> = ({title}) => {
  return (
    <StyledBox>
      <h1>{title}</h1>
    </StyledBox>
  )
}

export default TestComponent
