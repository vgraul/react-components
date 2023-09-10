import * as React from "react";
import type { SVGProps } from "react";
const SvgCz = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 336" {...props}>
    <g fill="none">
      <path
        fill="#41479B"
        d="M3.256 333.59 256 168 3.256 2.41C1.311 4.029 0 6.375 0 9.103v317.793c0 2.729 1.311 5.075 3.256 6.694z"
      />
      <path
        fill="#FF4B55"
        d="M3.256 333.59c1.53 1.274 3.425 2.134 5.571 2.134h494.345a8.829 8.829 0 0 0 8.828-8.828V168H256L3.256 333.59z"
      />
      <path
        fill="#F5F5F5"
        d="M3.256 2.41C4.786 1.136 6.681.276 8.827.276h494.345A8.829 8.829 0 0 1 512 9.104V168H256L3.256 2.41z"
      />
    </g>
  </svg>
);
export default SvgCz;
