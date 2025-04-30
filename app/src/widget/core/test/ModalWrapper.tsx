import { ReactNode, useState } from 'react';

const ModalWrapper = ({ children }: { children: ReactNode }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div id="split-payment">
      <button onClick={() => setShowModal(true)}>Show Modal</button>
      {showModal && children}
    </div>
  );
};

export default ModalWrapper;
