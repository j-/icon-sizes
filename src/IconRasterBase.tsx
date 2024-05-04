import { useMemo, type FC, type ImgHTMLAttributes } from 'react';
import { DraggableImage } from './DraggableImage';
import { IMAGE_TYPE_PNG } from './types';
import { canvasToDataURL } from './utils/canvas-to-data-url';

export type IconRasterBaseProps = ImgHTMLAttributes<HTMLImageElement> & {
  size: number;
  filename: string;
  colorFG: string;
  colorBG: string;
};

export const IconRasterBase: FC<IconRasterBaseProps> = ({
  size,
  filename,
  colorFG,
  colorBG,
  ...props
}) => {
  const type = IMAGE_TYPE_PNG;

  const dataURL = useMemo(() => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = size;
    canvas.height = size;

    ctx.fillStyle = colorBG;
    ctx.fillRect(0, 0, size, size);

    ctx.fillStyle = colorFG;
    ctx.font = size + 'px sans-serif';
    const label = String(size);
    const scale = size / ctx.measureText(label).width;
    ctx.font = (size * scale) + 'px sans-serif';
    ctx.fillText(label, 0, size);

    return canvasToDataURL(canvas, type);
  }, [colorBG, colorFG, size, type]);

  return (
    <DraggableImage
      src={dataURL}
      type={type}
      filename={filename}
      {...props}
    />
  );
};
