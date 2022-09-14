import React from 'react';
import { Select } from 'antd';

type SelectProps = React.ComponentProps<typeof Select>;

interface IdSelectProps
  extends Omit<SelectProps, 'value' | 'options' | 'onChange'> {
  defaultOptionName?: string;
  value: string | number | null | undefined;
  onChange: (value?: number | undefined) => void;
  options?: { id: number; name: string }[];
}

export const IdSelect = (props: IdSelectProps) => {
  const {
    defaultOptionName,
    options = [],
    onChange,
    value,
    ...resetProps
  } = props;

  return (
    <Select
      value={toNumber(value)}
      onChange={(value) => onChange(toNumber(value) || undefined)}
      {...resetProps}
    >
      {defaultOptionName && (
        <Select.Option value={0}>{defaultOptionName}</Select.Option>
      )}
      {options.map((option) => {
        return (
          <Select.Option key={option.id} value={option.id}>
            {option.name}
          </Select.Option>
        );
      })}
    </Select>
  );
};

export const toNumber = (value: unknown) =>
  isNaN(Number(value)) ? 0 : Number(value);
