import BoxFlex from '@/components/shared/BoxFlex';
import Modal from '@/components/shared/Modal';

interface SplitPaymentModalProps {
  instalmentFee: string;
  onClose: () => void;
}

const infoList = [
  {
    imgSrc: 'https://picsum.photos/id/56/100/50',
    text: 'Split your payment with only a fixed cost per instalment.',
  },
  {
    imgSrc: 'https://picsum.photos/id/63/100/50',
    text: 'Now you only pay the first instalment.',
  },
  {
    imgSrc: 'https://picsum.photos/id/223/100/50',
    text: 'The rest of the payment will be automatically charged to your card.',
  }
];

const SplitPaymentModal = ({
  instalmentFee,
  onClose
}: SplitPaymentModalProps) => (
  <Modal title="Split your payment" enableClickOutside onClose={onClose}>
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
        {`The monthly fee of ${instalmentFee || '0.00 €'}/month is also `
          + 'included in the amount shown, so you won\'t have any surprises.'}
      </p>
    </BoxFlex>
  </Modal>
);

export default SplitPaymentModal;
