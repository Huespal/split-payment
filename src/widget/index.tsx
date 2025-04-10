import Root from '@/components/Root';
import { createRoot } from 'react-dom/client';

const init = () => {
  const isDomLoading = document.readyState === 'loading';
  if (isDomLoading) {
    document.addEventListener('DOMContentLoaded', appendContent);
  } else {
    appendContent();
  }
}

const checkPrice = (price?: string) => {
  if (!price) {
    throw new Error('Missing data-price attribute');
  }

  const isNumber = !isNaN(Number(price));
  if (!isNumber) {
    throw new Error('data-price attribute is not a number');
  }
}

const appendContent = () => {
  try {
    const containerId = 'split-payment';
    const container = containerId
      ? document.getElementById(containerId)
      : null;

    if (container) {
      alert(`container exists ${containerId}`);
      const price = container.dataset.price;
      checkPrice(price);
      createRoot(container).render(<Root price={Number(price)} />);
    } else {
      console.warn('Split Payment initialization failed. Container not found.');
    }
  } catch (error) {
    console.warn('Split Payment initialization failed. ', error);
  }
}

init();