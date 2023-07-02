import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
:root {
  --primary-color: #042A3F;
  --secondary-blue-color: #0A4E7499;
  --light-gray: #A6C8DA42; 
  --yellow: #D8A31D;
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  border: none;
  outline: none;
}

html {
  font-size: 62.5%;
}

body {
  font-family: "Poppins", sans-serif;
  overflow-x: hidden;
}

a {
  text-decoration: none;
}


`;

export default GlobalStyled;