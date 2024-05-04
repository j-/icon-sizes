import type { FC, HTMLAttributes } from 'react';

export const IconGrid: FC<HTMLAttributes<HTMLDivElement>> = (props) => (
  <div
    style={{
      padding: '4rem',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: '1rem',
      placeItems: 'center',
    }}
    {...props}
  />
);
