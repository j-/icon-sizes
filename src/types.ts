export type BlobURL<U extends string = string> = `blob:${U}`;

export type DataURL<T extends string = string, D extends string = string> = `data:${T},${D}`;

export type ImageType = `image/${string}`;

export type ImageQuality = number;

export const IMAGE_TYPE_PNG = 'image/png';
export const IMAGE_TYPE_SVG = 'image/svg+xml';

export type SVGImageType = typeof IMAGE_TYPE_SVG;
