import { css } from '@emotion/react';
import { fonts } from './fonts';

export const reset = css`
@import url('https://fonts.googleapis.com/css2?family=Arvo:ital,wght@0,400;0,700;1,400;1,700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

a {
  text-decoration: none;
}

ul {
  list-style: none;
}
`

export const global = css`
  body{
    font-family: ${fonts.primary};
    font-size: 1rem;
    background-color: black;
  }
`