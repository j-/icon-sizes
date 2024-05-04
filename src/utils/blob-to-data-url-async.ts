import type { DataURL } from '../types';

export const blobToDataURLAsync = <
  T extends string = string,
  D extends string = string
>(blob: Blob): Promise<DataURL<T, D>> => {
  const reader = new FileReader();
  return new Promise<DataURL<T, D>>((resolve, reject) => {
    reader.onload = () => resolve(reader.result as DataURL<T, D>);
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(blob);
  });
};
