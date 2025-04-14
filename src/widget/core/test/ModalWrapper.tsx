import { ComponentChildren } from 'preact';
import { useState } from 'preact/hooks';

const ModalWrapper = ({ children }: { children: ComponentChildren }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div id="split-payment">
      <button onClick={() => setShowModal(true)}>Show Modal</button>
      {showModal && children}
    </div>
  );
};

export default ModalWrapper;
