import Panzoom from '@panzoom/panzoom'
import type { ClientModule } from '@docusaurus/types';
import { PanZoomPluginOptions } from "./PanzoomPluginOptions";

const config = require('@generated/docusaurus.config').default;
const { themeConfig } = config;
const { zoom }: { zoom: PanZoomPluginOptions } = themeConfig;
const { selectors = ['div.mermaid[data-processed="true"]', 'div.docusaurus-mermaid-container', '.drawio'], wrap = true, timeout = 1000, ...panZoomConfig } = zoom || {};

const zoomElements = (selectors: string[]) => {
  const foundElements: Element[] = [];
  selectors.forEach((selector) => {
    foundElements.push(...Array.from(document.querySelectorAll(selector)));
  });
  foundElements.forEach((element) => {
    const instance = Panzoom(element as HTMLElement, panZoomConfig);
    if (wrap) {
      // Check if the parent already contains a panzoom-wrapper
      if (!element.parentElement?.classList.contains('panzoom-wrapper')) {
        const wrapper = document.createElement('div');
        wrapper.setAttribute('style', "overflow: hidden");
        wrapper.className = 'panzoom-wrapper';
        element.parentElement?.insertBefore(wrapper, element);
        wrapper.appendChild(element);
        wrapper.addEventListener('wheel', (event) => {
          instance.zoomWithWheel(event);
        });
        wrapper.addEventListener('dblclick', (event) => {
          instance.reset();
        });
      }
    }
    if (!wrap) {
      (element as HTMLElement).addEventListener('wheel', (event) => {
        instance.zoomWithWheel(event);
      });
      (element as HTMLElement).addEventListener('dblclick', (event) => {
        instance.reset();
      });
    }
  });
};

const ZoomModule: ClientModule = {
  onRouteDidUpdate() {
    setTimeout(() => {
      zoomElements(selectors);
    }, timeout);
  },
}

export default ZoomModule;
