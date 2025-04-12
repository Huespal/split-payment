import BoxFlexStyled from '@/components/shared/BoxFlex/styles';
import { CSSProperties, ReactNode } from 'react';

interface BoxFlexProps {
  children: ReactNode;
  grow?: boolean;
  padding?: CSSProperties['padding'];
  isColumn?: boolean;
  alignItems?: CSSProperties['alignItems'];
  justifyContent?: CSSProperties['justifyContent'];
  isBordered?: boolean;
}

const BoxFlex = ({
  children,
  grow,
  padding,
  isColumn,
  alignItems,
  justifyContent,
  isBordered
}: BoxFlexProps) => (
  <BoxFlexStyled
    $grow={grow}
    $padding={padding}
    $isColumn={isColumn}
    $alignItems={alignItems}
    $justifyContent={justifyContent}
    $isBordered={isBordered}
  >
    {children}
  </BoxFlexStyled>
);

export default BoxFlex;
