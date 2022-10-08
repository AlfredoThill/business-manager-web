import { HTMLInputTypeAttribute, SyntheticEvent } from 'react';
import {
  FormControl,
  FormControlProps,
  InputLabel,
  InputLabelProps,
  Input,
  InputProps,
} from '@mui/material';

export interface IcustomInput {
  formControlProps?: FormControlProps;
  labelText: string;
  id: string;
  labelProps?: InputLabelProps;
  inputProps?: InputProps;
  handleChange(event: SyntheticEvent): void;
  type: HTMLInputTypeAttribute;
}

const CustomInput: React.FC<IcustomInput> = ({
  formControlProps,
  labelText,
  id,
  labelProps,
  inputProps,
  handleChange,
  type,
}: IcustomInput) => {
  return (
    <FormControl {...formControlProps}>
      {labelText !== undefined ? (
        <InputLabel htmlFor={id} {...labelProps}>
          {labelText}
        </InputLabel>
      ) : null}
      <Input id={id} onChange={handleChange} {...inputProps} type={type} />
    </FormControl>
  );
};

export default CustomInput;
