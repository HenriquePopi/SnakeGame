import styled from "styled-components";

const width = window.innerWidth;
export const NeonCanvas = styled.div`
  position: absolute;
  top: 46px;
  left: calc(50% - 374px);
  width: ${(props) => props.width || "508px"};
  height: ${(props) => props.height || "508px"};
  box-sizing: border-box;
  margin: 0 auto;
  background-color: none;
  color: hsl(317 100% 54%);
  border: hsl(317 100% 54%) 0.125em solid;
  border-radius: 0.25em;
  box-shadow: inset 0 0 1.5em 0 hsl(317 100% 54%), 0 0 1em 0 hsl(317 100% 54%);
`;
export const Canvas = styled.canvas`
  position: absolute;
  top: 50px !important;
  left: calc(50% - 370px) !important;
  width: ${(props) => props.width || "500px"};
  height: ${(props) => props.height || "500px"};
  box-sizing: border-box;
  border: 1px solid none;
`;
