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
  min-height: -webkit-fill-available;
  

}

body {
  min-height: 100vh;
}
#root {
  height: 100vh;
}

@media only screen and (max-width: 1080px) {
  #root {
    height: 100%;

  } 
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