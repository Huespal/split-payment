import Provider from '@/components/Provider';
import SplitPayment from '@/components/SplitPayment';
import { Theme } from '@/core/theme/types';

interface RootProps {
  theme?: Theme;
  price: number;
}

const Root = ({ theme, price }: RootProps) => (
  <Provider themeName={theme}>
    <SplitPayment price={price} />
  </Provider>
);

export default Root;