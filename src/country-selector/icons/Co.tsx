import * as React from "react";
import type { SVGProps } from "react";
const SvgCo = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 336" {...props}>
    <g fill="none">
      <path
        fill="#FF4B55"
        d="M512.001 251.862H0v75.034a8.829 8.829 0 0 0 8.828 8.828h494.345a8.829 8.829 0 0 0 8.828-8.828v-75.034z"
      />
      <path
        fill="#FFE15A"
        d="M512.001 168H0V9.103A8.829 8.829 0 0 1 8.828.275h494.345a8.829 8.829 0 0 1 8.828 8.828V168z"
      />
      <path fill="#41479B" d="M0 168h512v83.862H0z" />
    </g>
  </svg>
);
export default SvgCo;
