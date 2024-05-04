import { FC, ImgHTMLAttributes, useMemo } from 'react';
import { IconRasterBase } from './IconRasterBase';

export type IconRasterLightProps = ImgHTMLAttributes<HTMLImageElement> & {
  size: number;
  min?: number;
  max?: number;
};

export const IconRasterLight: FC<IconRasterLightProps> = ({ size, min = 16, max = 1024 }) => {
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
    <IconRasterBase
      size={size}
      colorBG={colorBG}
      colorFG={colorFG}
      filename={`${size}x${size}.png`}
      style={{
        width: dimension,
        height: dimension,
        imageRendering: 'pixelated',
      }}
    />
  );
};
