import styled from "styled-components";
import React from "react";

export const NeonButton = styled.button`
  font-size: 4rem;
  display: inline-block;
  cursor: pointer;
  background: none;
  text-decoration: none;
  color: hsl(317 100% 54%);
  border: hsl(317 100% 54%) 0.125em solid;
  padding: 0.25em 1em;
  border-radius: 0.25em;

  text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em currentColor;

  box-shadow: inset 0 0 0.5em 0 hsl(317 100% 54%), 0 0 0.5em 0 hsl(317 100% 54%);

  position: relative;

  ::before {
    pointer-events: none;
    content: "aaa";
    position: absolute;
    background: hsl(317 100% 54%);
    top: 120%;
    left: 0;
    width: 100%;
    height: 100%;

    transform: perspective(1em) rotateX(40deg) scale(1, 0.35);
    filter: blur(1em);
    opacity: 0.7;
  }

  ::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    box-shadow: 0 0 2em 0.5em hsl(317 100% 54%);
    opacity: 0;
    background-color: hsl(317 100% 54%);
    z-index: -1;
    transition: opacity 100ms linear;
  }

  :hover,
  :focus {
    color: hsl(315, 22%, 11%);
    text-shadow: none;
  }

  :hover::before,
  :focus::before {
    opacity: 1;
  }
  :hover::after,
  :focus::after {
    opacity: 1;
  }
`;
