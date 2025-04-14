import useClickOutside from '@/core/hooks/useClickOutside';
import { ComponentChildren } from 'preact';
import { createPortal } from 'preact/compat';
import { useRef } from 'preact/hooks';
import { ModalContainerStyled, ModalHeaderStyled, ModalStyled } from './styles';

interface ModalProps {
  children: ComponentChildren;
  title?: string;
  enableClickOutside?: boolean;
  onClose: (event: MouseEvent | TouchEvent) => void;
}

const Modal = ({
  children,
  title,
  enableClickOutside = false,
  onClose
}: ModalProps) => {
  const ref = useRef<HTMLDivElement>(null);
  useClickOutside(ref, enableClickOutside ? onClose : () => { });

  return createPortal(
    <ModalContainerStyled>
      <ModalStyled ref={ref}>
        <ModalHeaderStyled>
          <h4>seQura</h4>
          {title && <h1>{title}</h1>}
        </ModalHeaderStyled>
        <div>{children}</div>
      </ModalStyled>
    </ModalContainerStyled>,
    document.getElementById('split-payment')!
  );
};

export default Modal;