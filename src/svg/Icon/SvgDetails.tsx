import * as React from "react";
import Svg, { Path } from "react-native-svg";

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
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 11a4.002 4.002 0 01-3.874-3H2V6h7.126A4.002 4.002 0 0117 7a4 4 0 01-4 4zm6-5h3v2h-3V6zM8 21a4.002 4.002 0 01-3.874-3H2v-2h2.126A4.002 4.002 0 0112 17a4 4 0 01-4 4zm6-3h8v-2h-8v2zm-4-1a2 2 0 11-4 0 2 2 0 014 0zm5-10a2 2 0 11-4 0 2 2 0 014 0z"
        fill="#9448BC"
      />
    </Svg>
  );
}

const SvgDetails = React.memo(SvgComponent);
export default SvgDetails;
