import BoxFlex from '@/components/shared/BoxFlex';
import Modal from '@/components/shared/Modal';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
interface SplitPaymentModalProps {
  instalmentFee: string;
  onClose: () => void;
}

const SplitPaymentModal = ({
  instalmentFee,
  onClose
}: SplitPaymentModalProps) => {
  const { t } = useTranslation();

  const infoList = useMemo(() => [
    {
      imgSrc: 'https://picsum.photos/id/56/100/50',
      text: t('split_info_1')
    },
    {
      imgSrc: 'https://picsum.photos/id/63/100/50',
      text: t('split_info_2')
    },
    {
      imgSrc: 'https://picsum.photos/id/223/100/50',
      text: t('split_info_3')
    }
  ], [t]);


  return (
    <Modal title={t('split_title')} enableClickOutside onClose={onClose}>
      {infoList.map(({ imgSrc, text }) => (
        <BoxFlex
          key={text}
          padding="0 0 1rem 0"
          alignItems="center"
          justifyContent="space-between"
        >
          <p>• {text}</p>
          <img src={imgSrc} alt={text} />
        </BoxFlex>
      ))}
      <BoxFlex padding="1.5rem 0 0 0">
        <p>
          {t('monthly_fee_included', { fee: instalmentFee || '0.00 €' })}
        </p>
      </BoxFlex>
    </Modal>
  );
};

export default SplitPaymentModal;
