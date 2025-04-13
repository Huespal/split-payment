import {
  describe, expect, render, screen, test, userEvent, vitest
} from '@/../../testSetup';
import SplitPaymentSelect from '@/components/SplitPayment/Select';
import { Instalment } from '@/domain/creditAgreement/types';

describe('SplitPayment > Select', () => {
  const options: Instalment[] = [100, 200, 500].map((total, index) => ({
    instalmentCount: index + 1,
    instalmentTotal: {
      value: total * 100,
      string: `${total},00 €`
    },
    instalmentFee: {
      value: 500,
      string: '5,00 €'
    }
  }));
  const requiredProps = { isLoading: false, options, onSelect: vitest.fn() };

  test('Displays \'empty instalments\' text given empty '
    + '\'options\' array property', () => {
      render(<SplitPaymentSelect {...requiredProps} options={[]} />);

      expect(screen.getByText('instalment_empty')).toBeInTheDocument();
    });

  test('Renders 3 instalment select options given 3 instalment objects '
    + 'in \'options\' array property', () => {
      render(<SplitPaymentSelect {...requiredProps} />);

      expect(screen.queryByText('instalment_empty')).not.toBeInTheDocument();
      expect(screen.getAllByText('instalment_month')).toHaveLength(3);
    });

  test('Fires \'onSelect\' successfully callback given option selection',
    async () => {
      render(<SplitPaymentSelect {...requiredProps} />);

      const select = screen.getByRole('combobox');
      await userEvent.selectOptions(select, '2');

      expect(requiredProps.onSelect).toHaveBeenCalledWith(options[1]);
    });
});
