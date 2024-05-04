import { useMemo, type FC, type ImgHTMLAttributes } from 'react';
import { DraggableImage } from './DraggableImage';
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
  const type = 'image/png';

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
  }, [size, colorFG, colorBG]);

  return (
    <DraggableImage
      src={dataURL}
      type={type}
      filename={filename}
      {...props}
    />
  );
};
