import type { BlobURL } from '../types';

export const blobToBlobURL = <U extends string = string>(
  blob: Blob,
): BlobURL<U> => (
  window.URL.createObjectURL(blob) as BlobURL<U>
);
