import { css } from '@emotion/core'

export default function getGlobalStyles(variables) {
  return css`
    html,
    body {
      padding: 3rem 1rem;
      margin: 0;
      min-height: 100%;
      font-family: 'Open Sans', sans-serif;
      font-size: 16px;
      color: ${variables.colors.text.primary};
      background-color: ${variables.colors.background.primary};
      line-height: 1.5;
    }
    img {
      width: 100%;
      max-width: 100%;
      height: auto;
    }
    a {
      color: ${variables.colors.link};
      font-weight: bold;
    }
    h2 {
      font-size: 24px;
      border-bottom: 1px solid ${variables.colors.background.secondary};
      padding-bottom: 5px;
      margin-top: 20px;
      margin-bottom: 20px;
    }
    h3 {
      font-size: 20px;
      margin: 5px 0 10px;
    }
    a,
    button {
      outline: none;
      cursor: pointer;
    }
  `
}
