import styled, { CSSProperties } from 'styled-components';

interface BoxFlexProps {
  $padding?: CSSProperties['padding'];
  $grow?: boolean;
  $isColumn?: boolean;
  $alignItems?: CSSProperties['alignItems'];
  $justifyContent?: CSSProperties['justifyContent'];
  $isBordered?: boolean;
}

const BoxFlexStyled = styled.div<BoxFlexProps>(({
  theme,
  $padding,
  $grow = false,
  $isColumn = false,
  $alignItems = 'start',
  $justifyContent = 'center',
  $isBordered = false
}) => ({
  display: 'flex',
  flexDirection: $isColumn ? 'column' : 'row',
  gap: theme.space.default,
  justifyContent: $justifyContent,
  alignItems: $alignItems,
  padding: $padding,
  backgroundColor: theme.colors.neutral[100],
  ...($grow && { width: '100%' }),
  ...($isBordered && { border: theme.borders.neutral[300] })
}));

export default BoxFlexStyled;