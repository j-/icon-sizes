export type BlobURL<U extends string = string> = `blob:${U}`;

export type DataURL<T extends string = string, D extends string = string> = `data:${T},${D}`;

export type ImageType = `image/${string}`;

export type ImageQuality = number;
