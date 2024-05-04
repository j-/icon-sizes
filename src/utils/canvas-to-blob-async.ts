import type { ImageQuality, ImageType } from '../types';

export const canvasToBlobAsync = async (
  canvas: HTMLCanvasElement,
  type?: ImageType,
  quality?: ImageQuality,
): Promise<Blob> => {
  const blob = await new Promise<Blob | null>((resolve) => {
    canvas.toBlob(resolve, type, quality);
  });

  if (!blob) throw new Error('Failed to convert canvas to blob');

  return blob;
};
