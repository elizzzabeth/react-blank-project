import React from "react"
import { TestComponent } from "src/common/components"
import { ThemeProvider } from "styled-components"
import { theme } from "src/common/theme"

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <TestComponent title="Lorem Ipsum"/>
    </ThemeProvider>
  )
}

export default App
