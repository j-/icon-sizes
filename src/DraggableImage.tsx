import { type DragEventHandler, type FC, type ImgHTMLAttributes, useCallback } from 'react';
import { setDataTransferImageData } from './utils/set-data-transfer-image-data';

export type DraggableImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  type: string;
  filename: string;
};

export const DraggableImage: FC<DraggableImageProps> = ({
  src,
  type,
  filename,
  ...props
}) => {
  const handleDragstart = useCallback<DragEventHandler>((e) => {
    if (!e.dataTransfer) return;
    setDataTransferImageData(e.dataTransfer, src as string, type, filename);
  }, [filename, src, type]);

  return (
    <img
      src={src}
      draggable={true}
      onDragStart={handleDragstart}
      {...props}
    />
  );
};
