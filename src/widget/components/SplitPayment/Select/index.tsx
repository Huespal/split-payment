import FieldSelect from '@/components/shared/FieldSelect';
import { Instalment } from '@/domain/creditAgreement/types';
import { useCreateEvent } from '@/domain/event/api';
import { ChangeEvent } from 'react';

interface SplitPaymentSelectProps {
  options: Instalment[];
  onSelect: (option: Instalment) => void;
}

const SplitPaymentSelect = ({
  options,
  onSelect
}: SplitPaymentSelectProps) => {
  const { mutate: createEvent } = useCreateEvent();

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

  return (
    <FieldSelect
      id="instalments"
      name="instalments"
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
