/**
 * Takes a data transfer object from a drag event and sets these data
 * attributes:
 *
 * - `DownloadURL` for click+drag out of the browser.
 * - `text/plain` for click+drag into a text editor.
 * - `text/uri-list` for click+drag into browser tab.
 * - `text/html` for click+drag into WYSIWYG editor.
 *
 * @param dt Data transfer object.
 * @param src URL of image to transfer. Can be a `http:`, `https:`, `blob:`, or
 *  `data:` URL.
 * @param type MIME type e.g. `image/png`.
 * @param filename Name of file to use when downloading this image.
 */
export const setDataTransferImageData = (
  dt: DataTransfer,
  src: string,
  type: string,
  filename: string,
): void => {
  dt.setData('DownloadURL', `${type}:${filename}:${src}`);
  dt.setData('text/plain', src);
  dt.setData('text/uri-list', src);
  dt.setData('text/html', `<meta http-equiv="Content-Type" content="text/html;charset=UTF-8"><img src="${src}">`);
};
