import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function SvgComponent(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_1_2)">
        <G clipPath="url(#clip1_1_2)" fill="#010002">
          <Path d="M11.956 7.174a2.802 2.802 0 100-5.605 2.802 2.802 0 000 5.605zM21.766 12.081l-2.612-.544a2.139 2.139 0 00-2.233.946 9.601 9.601 0 00-1.452-.597v-1.553a2.14 2.14 0 00-2.132-2.137h-2.67a2.14 2.14 0 00-2.136 2.136v1.562a9.45 9.45 0 00-1.445.595 2.14 2.14 0 00-2.235-.953l-2.614.545a2.144 2.144 0 00-1.652 2.53l.656 3.134a2.14 2.14 0 002.526 1.653l.827-.173c.414.612.987 1.173 1.72 1.653C7.84 21.88 9.859 22.431 12 22.431c3.276 0 6.099-1.317 7.398-3.21l.84.177a2.14 2.14 0 002.525-1.653l.657-3.134a2.146 2.146 0 00-1.654-2.53zM12 21.361c-1.934 0-3.747-.487-5.1-1.378a5.372 5.372 0 01-1.155-1l.634-.133a2.141 2.141 0 001.654-2.526l-.588-2.818a8.042 8.042 0 011.086-.484v.514a2.14 2.14 0 002.135 2.134h2.671a2.14 2.14 0 002.132-2.134v-.541c.39.139.757.299 1.097.48l-.597 2.85a2.144 2.144 0 001.656 2.526l.64.134c-1.193 1.412-3.553 2.376-6.265 2.376zM21.198 10.858a2.802 2.802 0 100-5.605 2.802 2.802 0 000 5.605zM3.377 10.8A2.807 2.807 0 005.55 7.48a2.806 2.806 0 00-3.32-2.168A2.803 2.803 0 003.377 10.8z" />
        </G>
      </G>
      <Defs>
        <ClipPath id="clip0_1_2">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
        <ClipPath id="clip1_1_2">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgComponent;
