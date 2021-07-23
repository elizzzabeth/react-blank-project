import React from "react"

// types
import { TestComponentPropsType } from './TestComponentTypes';
// styles
import { StyledBox } from "./testComponentStyles"

const TestComponent: React.FC<TestComponentPropsType> = ({title}) => <StyledBox>{title}</StyledBox>

export default TestComponent
