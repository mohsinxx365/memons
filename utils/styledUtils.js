import { css } from "styled-components";

export const breakpoints = {
  smUp: 576,
  mdUp: 768,
  lgUp: 992,
  xlUp: 1200,
};

export const respondTo = (key) => `@media (min-width: ${breakpoints[key]}px)`;

export const flexCenter = (direction) =>
  css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: ${direction};
  `;

export const hnw = (height, width) =>
  css`
    height: ${height};
    width: ${width};
  `;
