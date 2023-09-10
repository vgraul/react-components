import * as React from "react";
import type { SVGProps } from "react";
const SvgNe = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 336" {...props}>
    <g fill="none">
      <path
        fill="#73AF00"
        d="M0 223.908h512v102.988a8.829 8.829 0 0 1-8.828 8.828H8.828A8.829 8.829 0 0 1 0 326.896V223.908z"
      />
      <path
        fill="#FF9B55"
        d="M8.828.276h494.345a8.829 8.829 0 0 1 8.828 8.828v102.988H0V9.103A8.828 8.828 0 0 1 8.828.276z"
      />
      <path fill="#F5F5F5" d="M0 112.088h512V223.9H0z" />
      <circle cx={256} cy={168} r={44.138} fill="#FF9B55" />
    </g>
  </svg>
);
export default SvgNe;
