import arrowSrc from '@/core/img/arrow-down.svg';
import styled from 'styled-components';

const FieldSetStyled = styled.fieldset(({ theme }) => ({
  display: 'grid',
  gap: theme.space.xs
}));

interface FieldSelectInputStyledProps {
  $minWidth?: string;
  $error: boolean;
}

const FieldSelectInputStyled = styled.select<FieldSelectInputStyledProps>(({
  theme, $minWidth = 0, $error
}) => ({
  borderRadius: theme.radii.default,
  gridAutoFlow: 'column',
  alignItems: 'center',
  input: { color: 'inherit' },
  position: 'relative',
  height: theme.space.xl,
  backgroundImage: `url("${arrowSrc}")`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right 1rem center',
  backgroundSize: '1em',
  backgroundColor: theme.colors.neutral[100],
  padding: `${theme.space.xs} ${theme.space.xl}`
    + ` ${theme.space.xs} ${theme.space.default}`,
  fontFamily: theme.fonts.default,
  fontSize: theme.fontSizes.default,
  color: $error
    ? theme.colors.semantic.error[500]
    : theme.colors.neutral[800],
  minWidth: $minWidth,
  cursor: 'pointer',
  appearance: 'none',
  outline: '2px solid',
  outlineColor: $error
    ? theme.colors.semantic.error[500]
    : theme.colors.neutral[300],
  outlineOffset: '-2px',
  '&:hover': {
    outlineColor: theme.colors.neutral[700]
  },
  '&:focus-within': {
    boxShadow: theme.shadows.focusAlpha
  }
}));

export { FieldSelectInputStyled, FieldSetStyled };
