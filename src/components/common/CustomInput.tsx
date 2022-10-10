import {
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
  LabelHTMLAttributes,
  HTMLAttributes,
  ChangeEvent,
} from 'react';

export interface IcustomInput {
  labelText: string;
  id: string;
  type: HTMLInputTypeAttribute;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
  labelProps?: LabelHTMLAttributes<HTMLLabelElement>;
  containerProps?: HTMLAttributes<HTMLDivElement>;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const CustomInput: React.FC<IcustomInput> = ({
  labelText,
  id,
  type,
  handleChange,
  inputProps,
  labelProps,
  containerProps,
}: IcustomInput) => {
  return (
    <div {...containerProps}>
      {labelText !== undefined ? (
        <label htmlFor={id} {...labelProps}>
          {labelText}
        </label>
      ) : null}
      <input id={id} onChange={handleChange} {...inputProps} type={type} />
    </div>
  );
};

export default CustomInput;
