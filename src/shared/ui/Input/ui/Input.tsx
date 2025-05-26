import type { FC, ReactElement } from "react";

import { TextField } from "@radix-ui/themes";
import type { IInputProps } from "@/shared/ui/Input/model/types";

import classes from "@/shared/ui/Input/ui/Input.module.scss";

export const Input: FC<IInputProps> = ({
  value = "",
  onChange,
  placeholder = "",
}): ReactElement => {
  return (
    <TextField.Root
      className={classes.customInput}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    >    
    </TextField.Root>
  );
};
