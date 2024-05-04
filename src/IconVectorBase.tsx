import { useMemo, type FC, type ImgHTMLAttributes } from 'react';
import { DraggableImage } from './DraggableImage';
import { IMAGE_TYPE_SVG } from './types';
import { svgToDataURL } from './utils/svg-to-data-url';

export type IconVectorBaseProps = ImgHTMLAttributes<HTMLImageElement> & {
  size: number;
  filename: string;
  colorFG: string;
  colorBG: string;
};

const SVG_NS = 'http://www.w3.org/2000/svg';
const DEFAULT_FONT_SIZE = 9;

export const IconVectorBase: FC<IconVectorBaseProps> = ({
  size,
  filename,
  colorFG,
  colorBG,
  ...props
}) => {
  const type = IMAGE_TYPE_SVG;

  const dataURL = useMemo(() => {
    const svg = document.createElementNS(SVG_NS, 'svg');

    svg.setAttribute('width', `${size}`);
    svg.setAttribute('height', `${size}`);

    const bg = document.createElementNS(SVG_NS, 'rect');
    bg.setAttribute('fill', colorBG);
    bg.setAttribute('width', `${size}`);
    bg.setAttribute('height', `${size}`);

    svg.appendChild(bg);

    const digits = Math.ceil(Math.log10(size));
    const width = DEFAULT_FONT_SIZE * digits;
    const scale = size / width;

    const fg = document.createElementNS(SVG_NS, 'text');
    fg.setAttribute('fill', colorFG);
    fg.setAttribute('transform', `translate(0, ${size}) scale(${scale})`);
    fg.appendChild(document.createTextNode(`${size}`));
    fg.style.setProperty('font-family', 'sans-serif');

    svg.appendChild(fg);

    return svgToDataURL(svg);
  }, [colorBG, colorFG, size]);

  return (
    <DraggableImage
      src={dataURL}
      type={type}
      filename={filename}
      {...props}
    />
  );
};
