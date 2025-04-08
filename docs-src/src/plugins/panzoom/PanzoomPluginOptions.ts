import type { PanzoomOptions } from '@panzoom/panzoom';

export type PanZoomPluginOptions = PanzoomOptions & {
  selectors?: string[];
  wrap?: boolean;
  timeout?: number;
}
