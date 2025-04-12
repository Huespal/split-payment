import breakpoints from '@/core/theme/breakpoints';
import styled from 'styled-components';

const ModalContainerStyled = styled.div`
	${({ theme }) => `
		display: grid;
		justify-content: center;
		align-items: center;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;
		background: ${theme.colors.neutral.alpha[500]};
		z-index: ${theme.zIndices.m};
	`}
`;

const ModalStyled = styled.article`
  ${({ theme }) => `
    background: ${theme.colors.neutral[100]};
    box-shadow: ${theme.shadows.elevationMedium};
    border-radius: ${theme.radii.default};
    height: auto;
    max-width: 30vw;
    max-height: 92vh;
    margin: auto;
    overflow: hidden;
    display: flex;
    flex-flow: column nowrap;
    > div {
      overflow-y: auto;
    }
    padding: ${theme.space.l} ${theme.space.xl};
    @media ${breakpoints.screenM} {
      min-width: 24rem;
      width: 35rem;
    }
    @media ${breakpoints.screenS} {
      min-width: 82vw;
    }
  `}
`;

const ModalHeaderStyled = styled.header`
  ${({ theme }) => `
    text-align: center;
    background: ${theme.colors.neutral[100]};
  `}
`;

export { ModalContainerStyled, ModalStyled, ModalHeaderStyled };
