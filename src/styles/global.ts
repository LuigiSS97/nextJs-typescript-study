import {createGlobalStyle} from 'styled-components';

import imgBack from "../assets/background.svg";

export const GlobalStyle = createGlobalStyle`
  *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }

  html {
      @media (max-width: 1080px) {
          font-size: 73.75%;
      }
      
      @media (max-width: 720px) {
          font-size: 87.5%;
      }

      body {
          background: #f0f0f0 url(${imgBack}) no-repeat 70% top;
          --webkit-font-smooth: antialiased;
      }

      #root {
          max-width: 960px;
          margin: 0 auto;
          padding: 2.5rem 1.25rem;
      }

      button {
          cursor: pointer;
          text-decoration: none;
      }
  }
`;