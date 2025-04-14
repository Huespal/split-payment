import BoxFlexStyled from '@/components/shared/BoxFlex/styles';
import { ComponentChildren } from 'preact';
import { CSSProperties } from 'styled-components';

interface BoxFlexProps {
  children: ComponentChildren;
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
