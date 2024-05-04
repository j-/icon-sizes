export const svgToString = (root: SVGSVGElement): string => (
  new XMLSerializer().serializeToString(root)
);
