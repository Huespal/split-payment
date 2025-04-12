import { describe, expect, render, screen, test } from '@/../../testSetup';
import BoxFlex from '@/components/shared/BoxFlex';

describe('BoxFlex', () => {
  test('Renders component successfully given required properties', () => {
    render(<BoxFlex>Test</BoxFlex>);

    expect(screen.getByText('Test')).toBeInTheDocument();
  })
  test('Renders component successfully given optional properties', () => {
    render(
      <BoxFlex
        padding="1rem"
        isColumn
        justifyContent="space-between"
        isBordered
      >
        Test
      </BoxFlex>
    );

    expect(screen.getByText('Test')).toBeInTheDocument();
  })
});
