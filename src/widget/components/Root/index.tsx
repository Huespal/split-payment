import Provider from '@/components/Provider';
import SplitPayment from '@/components/SplitPayment';
import i18n, { i18nConfig } from '@/core/i18n';
import { Langs } from '@/core/i18n/types';
import { Theme } from '@/core/theme/types';
import { useEffect, useState } from 'react';

interface RootProps {
  price: number;
  theme?: Theme;
  lang?: string;
}

const Root = ({ price, theme, lang = Langs.en }: RootProps) => {
  const [isLangReady, setIsLangReady] = useState(false);

  useEffect(() => {
    i18n.init({
      ...i18nConfig, lng: lang,
    }, () => {
      setIsLangReady(true);
    })
  }, [lang]);

  if (!isLangReady) return <></>;

  return (
    <Provider themeName={theme}>
      <SplitPayment price={price} />
    </Provider>
  );
}

export default Root;