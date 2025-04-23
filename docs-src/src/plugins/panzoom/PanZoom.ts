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
  zoomInButton.innerHTML = `
    <?xml version="1.0" encoding="iso-8859-1"?>
    <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
    <svg fill="currentColor" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
      width="10px" height="10px" viewBox="0 0 45.402 45.402"
      xml:space="preserve">
    <g>
      <path d="M41.267,18.557H26.832V4.134C26.832,1.851,24.99,0,22.707,0c-2.283,0-4.124,1.851-4.124,4.135v14.432H4.141
        c-2.283,0-4.139,1.851-4.138,4.135c-0.001,1.141,0.46,2.187,1.207,2.934c0.748,0.749,1.78,1.222,2.92,1.222h14.453V41.27
        c0,1.142,0.453,2.176,1.201,2.922c0.748,0.748,1.777,1.211,2.919,1.211c2.282,0,4.129-1.851,4.129-4.133V26.857h14.435
        c2.283,0,4.134-1.867,4.133-4.15C45.399,20.425,43.548,18.557,41.267,18.557z"/>
    </g>
    </svg>
  `;
  zoomInButton.className = 'button button--primary button--lg button-control'
  zoomInButton.addEventListener('click', () => instance.zoomIn());

  // Zoom Out Button
  const zoomOutButton = document.createElement('button');
  zoomOutButton.innerHTML = `
    <?xml version="1.0" encoding="UTF-8" standalone="no"?>
      <svg width="10px" height="10px" viewBox="0 -12 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">
        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
          <g id="Icon-Set-Filled" sketch:type="MSLayerGroup" transform="translate(-414.000000, -1049.000000)" fill="currentColor">
            <path d="M442,1049 L418,1049 C415.791,1049 414,1050.79 414,1053 C414,1055.21 415.791,1057 418,1057 L442,1057 C444.209,1057 446,1055.21 446,1053 C446,1050.79 444.209,1049 442,1049" id="minus" sketch:type="MSShapeGroup"></path>
          </g>
        </g>
    </svg>
  `;
  zoomOutButton.className = 'button button--primary button--lg button-control'
  zoomOutButton.addEventListener('click', () => instance.zoomOut());

  // Reset Button
  const resetButton = document.createElement('button');
  resetButton.innerHTML = `
    <?xml version="1.0" encoding="utf-8"?>
    <svg fill="currentColor" width="12px" height="12px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
      <path d="M960 0v213.333c411.627 0 746.667 334.934 746.667 746.667S1371.627 1706.667 960 1706.667 213.333 1371.733 213.333 960c0-197.013 78.4-382.507 213.334-520.747v254.08H640V106.667H53.333V320h191.04C88.64 494.08 0 720.96 0 960c0 529.28 430.613 960 960 960s960-430.72 960-960S1489.387 0 960 0" fill-rule="evenodd"/>
    </svg>
  `
  resetButton.className = 'button button--primary button--lg button-control'
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
        
        // wrapper.addEventListener('wheel', (event) => {
        //   instance.zoomWithWheel(event);
        // });

        // Add control buttons
        createControlButtons(wrapper, instance);

        // wrapper.addEventListener('dblclick', (event) => {
        //   instance.reset();
        // });
      }
    }
    if (!wrap) {
      // (element as HTMLElement).addEventListener('wheel', (event) => {
      //   instance.zoomWithWheel(event);
      // });
      // (element as HTMLElement).addEventListener('dblclick', (event) => {
      //   instance.reset();
      // });
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
