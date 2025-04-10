import InstalmentSelect from '@/components/Instalment/Select';
import Provider from '@/components/Provider';

interface RootProps {
  price: number;
}

const Root = ({ price }: RootProps) => (
  <Provider>
    <InstalmentSelect selectedPrice={price} />
  </Provider>
);

export default Root;