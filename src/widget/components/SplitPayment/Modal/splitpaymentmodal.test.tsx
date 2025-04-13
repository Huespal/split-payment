import {
  describe, expect, render, screen, test, userEvent, vitest
} from '@/../../testSetup';
import SplitPaymentModal from '@/components/SplitPayment/Modal';
import ModalWrapper from '@/core/test/ModalWrapper';

describe('SplitPayment > Modal', () => {
  const requiredProps = {
    instalmentFee: '5,00 €',
    onClose: vitest.fn()
  };

  test('Renders component successfully given require props', async () => {
    render(
      <ModalWrapper>
        <SplitPaymentModal {...requiredProps} />
      </ModalWrapper>
    );

    await userEvent.click(screen.getByText('Show Modal'));

    expect(screen.getByText('split_title')).toBeInTheDocument();
    [1, 2, 3].map(index => {
      expect(screen.getByText(`split_info_${index}`, { exact: false }))
        .toBeInTheDocument();
    });
    expect(screen.getByText(`monthly_fee_included`)).toBeInTheDocument();
  })

  test.skip('Fires \'onClose\' callback given outside click', async () => {
    const container = render(
      <ModalWrapper>
        <SplitPaymentModal {...requiredProps} />
      </ModalWrapper>
    );

    await userEvent.click(screen.getByText('Show Modal'));

    await userEvent.click(container.baseElement);
    expect(requiredProps.onClose).toHaveBeenCalled();
  })
});
