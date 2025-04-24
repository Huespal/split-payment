import FieldSelect from '@/components/shared/FieldSelect';
import { Instalment } from '@/domain/creditAgreement/types';
import { CREATE_EVENT } from '@/domain/event/api';
import { useMutation } from '@apollo/client';
import { ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';

interface SplitPaymentSelectProps {
  isLoading: boolean;
  options: Instalment[];
  onSelect: (option: Instalment) => void;
}

const SplitPaymentSelect = ({
  isLoading,
  options,
  onSelect
}: SplitPaymentSelectProps) => {
  const { t } = useTranslation();

  const [createEvent] = useMutation(CREATE_EVENT);
  const isEmpty = !isLoading && options.length <= 0;

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    if (value) {
      const instalmentCount = Number(value);
      createEvent({
        variables: {
          context: 'checkoutWidget',
          type: 'instalmentSelected',
          selectedInstalment: instalmentCount
        }
      });
      const selectedOption = options
        .find(option => option.instalmentCount === instalmentCount);
      if (selectedOption) onSelect(selectedOption);
    }
  };

  if (isEmpty) return <p>{t('instalment_empty')}</p>;

  return (
    <FieldSelect
      id="instalments"
      name="instalments"
      minWidth="18rem"
      onChange={handleChange}
      options={options}
    >
      {({ instalmentCount, instalmentTotal }) => (
        <option key={instalmentCount} value={instalmentCount}>
          {t('instalment_month', {
            count: instalmentCount, total: instalmentTotal.string
          })}
        </option>
      )}
    </FieldSelect>
  );
};

export default SplitPaymentSelect;
