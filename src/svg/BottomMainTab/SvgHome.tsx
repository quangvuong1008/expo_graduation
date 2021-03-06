import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props: any) {
  const { color } = props;

  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.889 10l6.001-6.001L17.891 10h-.001v10h-12V10h-.001zM3.89 11.999l-1.477 1.476L1 12.063l9.477-9.477c.78-.78 2.046-.78 2.826 0l9.477 9.477-1.413 1.414-1.477-1.477V20a2 2 0 01-2 2h-12a2 2 0 01-2-2v-8.001z"
        fill={color ? color : '#9C9E9D'}
      />
    </Svg>
  );
}

const SvgHome = React.memo(SvgComponent);
export default SvgHome;
