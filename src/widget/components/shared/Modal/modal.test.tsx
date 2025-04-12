import {
  describe, expect, render, screen, test, vitest
} from '@/../../testSetup';
import Modal from '@/components/shared/Modal';

describe('Container > Modal', () => {
  const requiredProps = {
    onClose: vitest.fn(),
    children: 'Test'
  };

  test('Renders Modal component successfully given required properties',
    () => {
      render(<Modal {...requiredProps} />);

      expect(screen.getByText('Test')).toBeInTheDocument();
    });

  test('Renders Modal component successfully given optional title property',
    () => {
      render(
        <Modal title="Modal title" {...requiredProps} />
      );

      expect(screen.getByText('Modal title')).toBeInTheDocument();
      expect(screen.getByText('Test')).toBeInTheDocument();
    });
});