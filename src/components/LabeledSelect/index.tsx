import React from 'react';
import { Label, StyledCreatableSelect, StyledSelect } from './styles';
import { OptionTypeBase, ValueType } from 'react-select';

export interface Options {
  value: unknown;
  label: string;
}

interface Props {
  name: string;
  type: 'Select' | 'CreatableSelect';
  label?: string;
  options?: {
    value: unknown;
    label: string;
  }[];
  placeholder?: string;
  formSection?: string;
  onChange?: (option: ValueType<OptionTypeBase>) => void;
}

const LabeledSelect: React.FC<Props> = (props) => {
  const {
    name,
    type,
    label,
    options,
    placeholder,
    formSection,
    onChange,
  } = props;

  const fieldName = formSection ? `${formSection}${name}` : name;
  const fieldId = formSection ? `${formSection}-${name}` : name;

  return (
    <div>
      <Label htmlFor={fieldId}>{label}</Label>

      {type === 'Select' && (
        <StyledSelect
          name={fieldName}
          id={fieldId}
          options={options}
          placeholder={placeholder}
          onChange={onChange}
          classNamePrefix="react-select"
        />
      )}

      {type === 'CreatableSelect' && (
        <StyledCreatableSelect
          name={fieldName}
          id={fieldId}
          options={options}
          placeholder={placeholder}
          onChange={onChange}
          classNamePrefix="react-select"
          isMulti
        />
      )}
    </div>
  );
};

export default LabeledSelect;
