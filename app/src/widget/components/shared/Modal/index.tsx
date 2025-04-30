import useClickOutside from '@/core/hooks/useClickOutside';
import { ReactNode, useRef } from 'react';
import { createPortal } from 'react-dom';
import { ModalContainerStyled, ModalHeaderStyled, ModalStyled } from './styles';

interface ModalProps {
  children: ReactNode;
  title?: string;
  enableClickOutside?: boolean;
  container?: ShadowRoot;
  onClose: (event: MouseEvent | TouchEvent) => void;
}

const Modal = ({
  children,
  title,
  enableClickOutside = false,
  container,
  onClose
}: ModalProps) => {
  const ref = useRef<HTMLDivElement>(null);
  useClickOutside(ref, enableClickOutside ? onClose : () => { });

  return createPortal(
    <ModalContainerStyled>
      <ModalStyled ref={ref}>
        <ModalHeaderStyled>
          <h4>Details</h4>
          {title && <h1>{title}</h1>}
        </ModalHeaderStyled>
        <div>{children}</div>
      </ModalStyled>
    </ModalContainerStyled>,
    container || document.body
  );
};

export default Modal;