import type { FC } from 'react';
import { IconGrid } from './IconGrid';
import { IconRasterDark } from './IconRasterDark';
import { IconRasterLight } from './IconRasterLight';
import { MAX_SIZE, MIN_SIZE, SIZES } from './icon';

export const App: FC = () => (
  <>
    <h1>Icon sizes</h1>

    <h2>Raster icons</h2>

    <IconGrid>
      {SIZES.map((size) => (
        <IconRasterLight key={size} size={size} min={MIN_SIZE} max={MAX_SIZE} />
      ))}
    </IconGrid>

    <h2>Raster icons (inverted)</h2>

    <IconGrid>
      {SIZES.map((size) => (
        <IconRasterDark key={size} size={size} min={MIN_SIZE} max={MAX_SIZE} />
      ))}
    </IconGrid>
  </>
);
