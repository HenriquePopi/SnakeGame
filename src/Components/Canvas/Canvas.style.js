import React from "react";
import styled from "styled-components";

export const InnerCanvas = styled.div`
  position: absolute;
  top: 46px;
  left: 46px;
  width: 508px;
  height: 508px;
  box-sizing: border-box;
  border: 1px solid black;
  margin: 0 auto;
  background-color: none;
  color: hsl(317 100% 54%);
  border: hsl(317 100% 54%) 0.125em solid;
  padding: 0.25em 1em;
  border-radius: 0.25em;
  box-shadow: inset 0 0 1.5em 0 hsl(317 100% 54%), 0 0 1em 0 hsl(317 100% 54%);
`;
export const Canvas = styled.canvas`
  display: block;
  position: absolute;
  width: 500px;
  height: 500px;
  box-sizing: border-box;
  border: 1px solid none;
  margin: 0 auto;
  background-color: none;
`;
