import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
 *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    color: var(--white);

 }
 html, body,  #root {
   max-width: 100vw;
    max-height: 100vh;

    width: 100%;
    height: 100%;
 }

 *, button, input {
    border: 0;
    background: none;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    
 }

  html {
    background: var(--primary);
  }

  a {
    text-decoration: none;
    color: var(--yellow);
    cursor: pointer;
    transition: ease-in-out 0.2s;

    &:hover {
      background: var(--twitter-dark-hover);
      opacity: 0.7;
    }

  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track{
    background-color: transparent;
    border-radius: 40px;
  }

  ::-webkit-scrollbar-thumb {
    
    background-color: #8c8080;
    border-radius: 40px;
    transition: all 0.3s ease-in-out;

    &:hover {
      background-color:var(--yellow);
    }
  }

  ::selection {
  color: var(--yellow);
  background: #8c8080;
}

  :root {
    --primary: #000;
    --secondary: #15181C;
    --search: #202327;
    ${'' /* --white: #D9D9D9; */}
    --white: #EFF5F5;
    --gray: #7A7A7A;
    --outline: #2F3336;
    --retweet: #00C06B;
    --like: #E8265E;
    --twitter: #33A1F2;
    --twitter-dark-hover: #1B1A17;
    --twitter-light-hover: #2C8ED6;
    --yellow: #FAD120;
  }

`;
