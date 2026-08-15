import React, { useId } from "react";

export default function GradientRing({ className }) {
  const uid = useId();
  const paint0 = `gradientRingPaint0-${uid}`;
  const paint1 = `gradientRingPaint1-${uid}`;

  return (
    <svg
      className={className}
      viewBox="0 0 1301 1246"
      fill="none"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1281.46 435C1290.99 480.446 1296 527.619 1296 576C1296 725.033 1248.41 862.615 1168.04 973.5"
        stroke={`url(#${paint0})`}
        strokeWidth="10"
      />
      <path
        d="M1043 1103.98C934.239 1189.92 798.159 1241 650.5 1241C294 1241 5 943.269 5 576C5 524.774 10.6222 474.901 21.2656 427"
        stroke={`url(#${paint1})`}
        strokeWidth="10"
      />
      <defs>
        <linearGradient
          id={paint0}
          x1="1168"
          y1="942.5"
          x2="1296"
          y2="538"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EED266" />
          <stop offset="0.350962" stopColor="#FF9A66" />
          <stop offset="0.653846" stopColor="#DA8478" />
          <stop offset="1" stopColor="#996580" />
        </linearGradient>
        <linearGradient
          id={paint1}
          x1="5"
          y1="705"
          x2="682"
          y2="1220.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#706996" />
          <stop offset="0.197115" stopColor="#996580" />
          <stop offset="0.427885" stopColor="#CD6983" />
          <stop offset="0.629808" stopColor="#DC8677" />
          <stop offset="0.8125" stopColor="#D7A071" />
          <stop offset="1" stopColor="#EED266" />
        </linearGradient>
      </defs>
    </svg>
  );
}
