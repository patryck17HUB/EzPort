import React from 'react';
import Svg, { Path, LinearGradient, Defs, Stop, G } from 'react-native-svg';

const SvgComponent = () => {
  return (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={481}
    height={400}
    fill="none"
  >
    <Defs>
      <LinearGradient
        id="b"
        x1={240.5}
        x2={240.5}
        y1={0}
        y2={398.47}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#2F0F69" />
        <Stop offset={1} stopColor="#7539E5" />
      </LinearGradient>
    </Defs>
    <G>
      <Path
        fill="url(#b)"
        d="M4.5 0v329.5c28.5-52.833 112.9-126.8 222.5 0s212 50.167 249.5-4V0H4.5Z"
      />
      <Path
        stroke="#000"
        d="M85.22 261.651C47.496 270.744 19.568 301.42 5 327.549V.5h471v324.844c-18.728 26.995-53.568 59.505-97.324 69.531-43.771 10.03-96.593-2.412-151.298-65.702-54.873-63.485-103.55-76.826-142.158-67.522Z"
      />
    </G>
  </Svg>
  );
}

export default SvgComponent;