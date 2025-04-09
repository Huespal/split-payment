import { describe, expect, render, screen, test } from '@/../../testSetup';
import InstalmentSelect from '@/components/Instalment/Select';
import '@testing-library/jest-dom';

describe('InstalmentSelect', () => {
  test('Renders component successfully given required properties', () => {
    render(<InstalmentSelect />);
    expect(screen.getByText('Instalments Selector')).toBeInTheDocument();
  })
});