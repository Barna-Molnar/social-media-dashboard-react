import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
html {
  font-size: 10px;
  font-family: 'Inter', sans-serif;
  min-height: 100%;

}

body {
  min-height: 100vh;
}
#root {
  height: 100vh;
}
/* .background {
    position: absolute;
    z-index: -1;
    isolation: isolate;
    .topBg {
      width: 100vw;
      height: 30vh;
      background-color: ${(p) => p.theme.darkMode.topBackground};
    }
    .bottomBg {
      width: 100vw;
      height: 70vh;
      background-color: ${(p) => p.theme.darkMode.background};
    }
  } */


`
export default GlobalStyles