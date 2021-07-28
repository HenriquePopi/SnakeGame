import styled, { keyframes, css } from "styled-components";

const blink = keyframes`
0%{
  opacity: 0;
}
5%{
  opacity: 1;
}
10%{
  opacity: 0;
}
15%{
  opacity: 1;
}
78%{
  opacity: 1;
}
80%{
  opacity: 0;
}
85%{
  opacity: 1;
}
100%{
  opacity: 1;
}
`;
const blinkBorderLeft = keyframes`

0%{
  border-left: none;
}
12%{
  border-left: none;
}
15%{
  border-left: hsl(317 100% 54%);
}
17%{
  border-left: none;
}
76%{
  border-left: none;
}
78%{
  border-left: hsl(317 100% 54%);
}
80%{
  border-left: none;
}

100%{
  border-left: none;
}
`;

export const NeonButton = styled.button`
  outline: none;
  font-size: ${(props) => props.size || `1.5rem`};
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
    content: "";
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

export const NeonLetter = styled.p`
  font-size: 4rem;
  display: inline-block;
  cursor: pointer;
  color: hsl(317 100% 54%);
  padding: 0;
  margin-left: 0.8rem;
  margin-right: 0.8rem;
  text-shadow: none;
  position: relative;

  ::before {
    pointer-events: none;
    content: "";
    position: absolute;
    background: hsl(317 100% 54%);
    top: 120%;
    left: 0;
    width: 100%;
    height: 100%;
    transform: perspective(1em) rotateX(40deg) scale(1, 0.35);
    filter: blur(1em);
    opacity: 0.5;
  }

  :hover,
  :focus {
    text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em currentColor;
  }

  :hover::before,
  :focus::before {
    opacity: 1;
  }
`;
export const NeonLetterBlink = styled(NeonLetter)`
  animation: ${blink} 1.5s linear 0.2s infinite;
  animation-delay: ${(props) => props.delay};
  text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em currentColor;
  ::before {
    opacity: 1;
  }
`;
export const NeonLetterBlink2 = styled(NeonLetterBlink)`
  animation: ${blink} 1.5s linear 0.2s infinite;
`;
// ANIMATION

export const AnimatedContainer = styled.div`
  animation-duration: ${(props) => props.duration};
  animation-timing-function: ${(props) => props.timingFunction};
  animation-delay: ${(props) => props.delay};
  animation-iteration-count: ${(props) => props.iterationCount};
  animation-direction: ${(props) => props.direction};
  animation-fill-mode: ${(props) => props.fillMode};
  animation-play-state: ${(props) => props.playState};
  display: ${(props) => props.display};
  ${(props) =>
    props.animate === "blink" &&
    css`
      animation: ${blink} 2s linear 0.2s infinite;
    `}
  ${(props) =>
    props.animate === "blinkBorderLeft" &&
    css`
      animation: ${blinkBorderLeft} 2s linear 0.2s infinite;
    `}
`;
AnimatedContainer.defaultProps = {
  duration: "1s",
  timingFunction: "linear",
  delay: "0s",
  iterationCount: "1",
  direction: "normal",
  fillMode: "both",
  playState: "running",
  display: "block",
};
////////////////////////////////

export const Space = styled.div`
  height: ${(props) => props.height || "1rem"};
`;

export const LetterContainer = styled.div`
  display: inline-block;
  margin: 0 1rem 0 1rem;
`;
export const Centralizer = styled.div`
  display: flex;
  justify-content: center;
`;
