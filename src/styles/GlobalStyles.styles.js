import {createGlobalStyle} from 'styled-components';
import { color } from './global-variables.styles';

export const GlobalStyle = createGlobalStyle`
    html,
    body {
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 34, 92, 1);
      background: linear-gradient(
        45deg,
        ${color.navy} 0%,
        ${color.teal} 100%
      );
      background-repeat: no-repeat;
      background-size: cover;
      background-attachment: fixed;
      color: #fff;
      font-family: sans-serif;
    }

    #root,
    .App {
      width: 100%;
      height: 100%;
    }

    div,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    a,
    button,
    ul,
    li,
    span {
      box-sizing: border-box;
    }
`
