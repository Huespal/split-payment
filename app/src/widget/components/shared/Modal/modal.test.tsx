import {
  describe, expect, render, screen, test, userEvent, vitest
} from '@/../../testSetup';
import Modal from '@/components/shared/Modal';
import ModalWrapper from '@/core/test/ModalWrapper';

describe('Container > Modal', () => {
  const requiredProps = {
    onClose: vitest.fn(),
    children: 'Test'
  };

  test('Renders Modal component successfully given required properties',
    async () => {
      render(
        <ModalWrapper>
          <Modal {...requiredProps} />
        </ModalWrapper>
      );

      await userEvent.click(screen.getByText('Show Modal'));
      expect(screen.getByText('Test')).toBeInTheDocument();
    });

  test('Displays title successfully given the optional \'title\' property',
    async () => {
      render(
        <ModalWrapper>
          <Modal title="Modal title" {...requiredProps} />
        </ModalWrapper>
      );

      await userEvent.click(screen.getByText('Show Modal'));
      expect(screen.getByText('Modal title')).toBeInTheDocument();
      expect(screen.getByText('Test')).toBeInTheDocument();
    });
});