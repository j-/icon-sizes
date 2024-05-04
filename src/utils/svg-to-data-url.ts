import { type SVGImageType, IMAGE_TYPE_SVG, type DataURL } from '../types';
import { svgToString } from './svg-to-string';

const TO_ENCODE_EXPR = /[<>#%{}"]/g;

const encodeReplacer = (ch: string) => (
  '%' + ch.charCodeAt(0).toString(16)
);

// See https://gist.github.com/jennyknuth/222825e315d45a738ed9d6e04c7a88d0
export const svgToDataURL = (document: SVGSVGElement): DataURL<SVGImageType> => {
  let string = svgToString(document);
  if (string.indexOf('xmlns') < 0) {
    string = string.replace('<svg', '<svg xmlns="http://www.w3.org/2000/svg"');
  }
  string = string.replace(TO_ENCODE_EXPR, encodeReplacer);
  return `data:${IMAGE_TYPE_SVG},${string}` as DataURL<SVGImageType>;
};
