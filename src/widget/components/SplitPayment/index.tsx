import BoxFlex from '@/components/shared/BoxFlex';
import SplitPaymentModal from '@/components/SplitPayment/Modal';
import SplitPaymentSelect from '@/components/SplitPayment/Select';
import { useGetCreditAgreements } from '@/domain/creditAgreement/api';
import { Instalment } from '@/domain/creditAgreement/types';
import { useCreateEvent } from '@/domain/event/api';
import { useEffect, useState } from 'preact/hooks';
import { useTranslation } from 'react-i18next';

interface SplitPaymentProps {
  price: number;
}

const SplitPayment = ({
  price
}: SplitPaymentProps) => {
  const { t } = useTranslation();

  const {
    data: creditAgreements = [], isLoading, isSuccess
  } = useGetCreditAgreements(price);

  const { mutate: createEvent } = useCreateEvent();

  const [
    selectedInstalment, setSelectedInstalment
  ] = useState<Instalment>(creditAgreements[0]);
  const instalmentFee = selectedInstalment?.instalmentFee.string ?? '';

  const [showModal, setShowModal] = useState(false);

  const toggleModal = (isInfoModalOpen: boolean) => {
    setShowModal(isInfoModalOpen);
    createEvent({
      context: 'checkoutWidget',
      type: 'infoModal',
      isInfoModalOpen
    });
  };

  useEffect(() => {
    if (isSuccess) {
      setSelectedInstalment(creditAgreements?.[0]);
    }
  }, [isSuccess]);

  return (
    <BoxFlex isColumn isBordered padding="1rem" alignItems="center">
      <BoxFlex grow justifyContent="space-between">
        <p>{t('pay_it_in')}</p>
        <button onClick={() => { toggleModal(true); }}>
          {t('more_info')}
        </button>
      </BoxFlex>
      <SplitPaymentSelect
        isLoading={isLoading}
        options={creditAgreements}
        onSelect={setSelectedInstalment}
      />
      {showModal && (
        <SplitPaymentModal
          instalmentFee={instalmentFee}
          onClose={() => { toggleModal(false); }}
        />
      )}
    </BoxFlex>
  );
};

export default SplitPayment;
