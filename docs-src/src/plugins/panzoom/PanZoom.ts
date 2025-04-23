import Panzoom from '@panzoom/panzoom'
import type { ClientModule } from '@docusaurus/types';
import { PanZoomPluginOptions } from "./PanzoomPluginOptions";

const config = require('@generated/docusaurus.config').default;
const { themeConfig } = config;
const { zoom }: { zoom: PanZoomPluginOptions } = themeConfig;
const { selectors = ['div.mermaid[data-processed="true"]', 'div.docusaurus-mermaid-container', '.drawio'], wrap = true, timeout = 1000, ...panZoomConfig } = zoom || {};

const updatedPanZoomConfig = { ...panZoomConfig, disablePan: false };

const createControlButtons = (wrapper: HTMLElement, instance: ReturnType<typeof Panzoom>) => {
  const buttonContainer = document.createElement('div');
  buttonContainer.className = 'panzoom-controls';

  // Zoom In Button
  const zoomInButton = document.createElement('button');
  zoomInButton.innerHTML = `<svg fill="currentColor" version="1.1" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M3.75 7.5a.75.75 0 0 1 .75-.75h2.25V4.5a.75.75 0 0 1 1.5 0v2.25h2.25a.75.75 0 0 1 0 1.5H8.25v2.25a.75.75 0 0 1-1.5 0V8.25H4.5a.75.75 0 0 1-.75-.75Z"></path><path d="M7.5 0a7.5 7.5 0 0 1 5.807 12.247l2.473 2.473a.749.749 0 1 1-1.06 1.06l-2.473-2.473A7.5 7.5 0 1 1 7.5 0Zm-6 7.5a6 6 0 1 0 12 0 6 6 0 0 0-12 0Z"></path></svg>`
  zoomInButton.className = 'button button--secondary button--lg button-control'
  zoomInButton.addEventListener('click', () => instance.zoomIn());

  // Zoom Out Button
  const zoomOutButton = document.createElement('button');
  zoomOutButton.innerHTML = `<svg fill="currentColor" version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-zoom-out" aria-hidden="true"><path d="M4.5 6.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1 0-1.5Z"></path><path d="M0 7.5a7.5 7.5 0 1 1 13.307 4.747l2.473 2.473a.749.749 0 1 1-1.06 1.06l-2.473-2.473A7.5 7.5 0 0 1 0 7.5Zm7.5-6a6 6 0 1 0 0 12 6 6 0 0 0 0-12Z"></path></svg>`;
  zoomOutButton.className = 'button button--secondary button--lg button-control'
  zoomOutButton.addEventListener('click', () => instance.zoomOut());

  // Reset Button
  const resetButton = document.createElement('button');
  resetButton.innerHTML = `<svg fill="currentColor" version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-sync" aria-hidden="true"><path d="M1.705 8.005a.75.75 0 0 1 .834.656 5.5 5.5 0 0 0 9.592 2.97l-1.204-1.204a.25.25 0 0 1 .177-.427h3.646a.25.25 0 0 1 .25.25v3.646a.25.25 0 0 1-.427.177l-1.38-1.38A7.002 7.002 0 0 1 1.05 8.84a.75.75 0 0 1 .656-.834ZM8 2.5a5.487 5.487 0 0 0-4.131 1.869l1.204 1.204A.25.25 0 0 1 4.896 6H1.25A.25.25 0 0 1 1 5.75V2.104a.25.25 0 0 1 .427-.177l1.38 1.38A7.002 7.002 0 0 1 14.95 7.16a.75.75 0 0 1-1.49.178A5.5 5.5 0 0 0 8 2.5Z"></path></svg>`
  resetButton.className = 'button button--secondary button--lg button-control'
  resetButton.addEventListener('click', () => instance.reset());

  // Append buttons to the container
  buttonContainer.appendChild(zoomInButton);
  buttonContainer.appendChild(zoomOutButton);
  buttonContainer.appendChild(resetButton);

  // Append the container to the wrapper
  wrapper.appendChild(buttonContainer);
};

const zoomElements = (selectors: string[]) => {
  const foundElements: Element[] = [];
  selectors.forEach((selector) => {
    foundElements.push(...Array.from(document.querySelectorAll(selector)));
  });
  foundElements.forEach((element) => {
    const instance = Panzoom(element as HTMLElement, updatedPanZoomConfig);
    if (wrap) {
      // Check if the parent already contains a panzoom-wrapper
      if (!element.parentElement?.classList.contains('panzoom-wrapper')) {
        const wrapper = document.createElement('div');
        wrapper.setAttribute('style', "overflow: hidden");
        wrapper.className = 'panzoom-wrapper';
        element.parentElement?.insertBefore(wrapper, element);
        wrapper.appendChild(element);

        // Add control buttons
        createControlButtons(wrapper, instance);
      }
    }
  });
};


const ZoomModule: ClientModule = {
  onRouteDidUpdate() {
    setTimeout(() => {
      zoomElements(selectors);
    }, timeout);
  },
};

export default ZoomModule;
