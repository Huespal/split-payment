import { hydrateRoot } from 'react-dom/client';
import InstalmentSelect from './components/Instalment/Select';

const init = () => {
  const isDomLoading = document.readyState === 'loading';
  if (isDomLoading) {
    document.addEventListener('DOMContentLoaded', appendContent);
  } else {
    appendContent();
  }
}

const appendContent = () => {
  try {
    const element = document.createElement('div');
    const shadow = element.attachShadow({ mode: 'open' });
    const shadowRoot = document.createElement('div');
    shadowRoot.id = 'split-payment';
    const component = <InstalmentSelect />;
    shadow.appendChild(shadowRoot);
    hydrateRoot(shadowRoot, component);
    document.body.appendChild(element);
  } catch (error) {
    console.warn('Split Payment initialization failed. ', error);
  }
}

init();