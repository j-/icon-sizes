import type { DataURL, ImageQuality, ImageType } from '../types';

export const canvasToDataURL = <
  T extends string = string,
  D extends string = string
>(
  canvas: HTMLCanvasElement,
  type?: ImageType,
  quality?: ImageQuality,
): DataURL<T, D> => (
  canvas.toDataURL(type, quality) as DataURL<T, D>
);
