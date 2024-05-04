import { FC, ImgHTMLAttributes, useMemo } from 'react';
import { IconVectorBase } from './IconVectorBase';

export type IconVectorLightProps = ImgHTMLAttributes<HTMLImageElement> & {
  size: number;
  min?: number;
  max?: number;
};

export const IconVectorLight: FC<IconVectorLightProps> = ({ size, min = 16, max = 1024 }) => {
  const proportion = useMemo(() => {
    const logMin = Math.log(min);
    const logMax = Math.log(max);
    const logSize = Math.log(size);
    return (logSize - logMin) / (logMax - logMin);
  }, [max, min, size]);

  const dimension = useMemo(() => (
    `${Math.round(250 * (0.5 + 0.5 * proportion))}px`
  ), [proportion]);

  const colorBG = `hsl(${360 * proportion}, 90%, 70%)`;
  const colorFG = 'black';

  return (
    <IconVectorBase
      size={size}
      colorBG={colorBG}
      colorFG={colorFG}
      filename={`${size}x${size}.svg`}
      style={{
        width: dimension,
        height: dimension,
      }}
    />
  );
};
