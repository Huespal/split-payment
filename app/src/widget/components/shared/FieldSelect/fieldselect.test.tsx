import FieldSelect from '@/components/shared/FieldSelect';
import { describe, expect, render, screen, test } from '@/../../testSetup';

describe('FieldSelect', () => {
  test('Renders component successfully given required properties', () => {
    render(
      <FieldSelect
        id="test"
        name="test"
        options={['Test', 'Test 2']}
      >
        {opt => (
          <option key={opt} value={opt}>{opt}</option>
        )}
      </FieldSelect>
    );

    expect(screen.getByText('Test')).toBeInTheDocument();
    expect(screen.getByText('Test 2')).toBeInTheDocument();
  })
  test('Renders component successfully given initial text', () => {
    render(
      <FieldSelect
        id="test-initial"
        name="testInitial"
        initialText="Select..."
        options={[]}
      >
        {opt => (
          <option key={opt} value={opt}>{opt}</option>
        )}
      </FieldSelect>
    );

    expect(screen.getByText('Select...')).toBeInTheDocument();
  })
});
