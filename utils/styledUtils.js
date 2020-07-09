import { css } from "styled-components";

export const breakpoints = {
  smUp: 576,
  mdUp: 768,
  lgUp: 992,
  xlUp: 1200,
};

export const respondTo = (key) => {
  return (style) =>
    css`
      @media (min-width: ${breakpoints[key]}px) {
        ${style}
      }
    `;
};

export const flexCenter = (direction) => {
  return css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: ${direction};
  `;
};

export const hnw = (height, width) => {
  return css`
    height: ${height};
    width: ${width};
  `;
};
