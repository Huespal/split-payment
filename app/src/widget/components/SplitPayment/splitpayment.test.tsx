import {
  describe, expect, render, screen, test, userEvent
} from '@/../../testSetup';
import SplitPayment from '@/components/SplitPayment';

describe('SplitPayment', () => {
  const requiredProps = { price: 10000 };

  test('Renders component successfully given required properties', () => {
    render(<SplitPayment {...requiredProps} />);

    expect(screen.getByText('pay_it_in')).toBeInTheDocument();
    expect(screen.getByText('more_info')).toBeInTheDocument();

    const modalTitle = screen.queryByText('split_title');
    expect(modalTitle).not.toBeInTheDocument();
  });

  test('Displays informative modal into the wrapper container given a click '
    + 'on the \'more info\' button', async () => {
      render(
        <div id="split-payment">
          <SplitPayment {...requiredProps} />
        </div>
      );

      const modalBtn = screen.getByText('more_info');
      expect(screen.queryByText('split_title')).not.toBeInTheDocument();

      await userEvent.click(modalBtn);

      expect(screen.getByText('split_title')).toBeInTheDocument();
      [1, 2, 3].map(index => {
        expect(screen.getByText(`split_info_${index}`, { exact: false }))
          .toBeInTheDocument();
      });
      expect(screen.getByText(`monthly_fee_included`)).toBeInTheDocument();
    })
});
