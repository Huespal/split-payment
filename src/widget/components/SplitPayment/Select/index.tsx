import FieldSelect from '@/components/shared/FieldSelect';
import { Instalment } from '@/domain/creditAgreement/types';
import { useCreateEvent } from '@/domain/event/api';
import { ChangeEvent } from 'react';

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
  const { mutate: createEvent } = useCreateEvent();
  const isEmpty = !isLoading && options.length <= 0;

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    if (value) {
      const instalmentCount = Number(value);
      createEvent({
        context: 'checkoutWidget',
        type: 'instalmentSelected',
        selectedInstalment: instalmentCount
      });
      const selectedOption = options
        .find(option => option.instalmentCount === instalmentCount);
      if (selectedOption) onSelect(selectedOption);
    }
  };

  if (isEmpty) return <p>No instalments available</p>;

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
          {instalmentCount} instalments of {instalmentTotal.string}/month
        </option>
      )}
    </FieldSelect>
  );
};

export default SplitPaymentSelect;
