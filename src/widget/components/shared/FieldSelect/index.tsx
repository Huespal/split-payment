import {
  FieldSelectInputStyled, FieldSetStyled
} from '@/components/shared/FieldSelect/styles';
import { ComponentChildren, JSX } from 'preact';

interface FieldSelectProps<T> {
  id: string;
  name: string;
  options: T[];
  children: (props: T) => ComponentChildren;
  legend?: string;
  value?: string;
  initialText?: string;
  error?: boolean;
  minWidth?: string;
  onChange?: (event: JSX.TargetedEvent<HTMLSelectElement, Event>) => void;
}

const FieldSelect = <T,>({
  id,
  name,
  options,
  children,
  legend,
  value,
  initialText,
  error = false,
  minWidth,
  onChange
}: FieldSelectProps<T>) => (
  <FieldSetStyled>
    {legend && <label htmlFor={id}>{legend}</label>}
    <FieldSelectInputStyled
      id={id}
      value={value}
      name={name}
      $error={error}
      $minWidth={minWidth}
      onChange={onChange}
    >
      {(!value && initialText) && (
        <option value="" hidden>{` ${initialText}`}</option>
      )}
      {options.length > 0 && options.map(children)}
    </FieldSelectInputStyled>
  </FieldSetStyled>
);

export default FieldSelect;
