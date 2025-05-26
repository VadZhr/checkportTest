import type { FC, ReactElement } from "react";
import { Button } from "@radix-ui/themes";

import type { ICheckPortButtonProps } from "../model/types";

import classNames from "classnames";
import classes from "./ChekPortButton.module.scss";

export const CheckPortButton: FC<ICheckPortButtonProps> = ({
  title,
  active=false,
  icon,
  ...rest
}): ReactElement => {
  return (
    <Button
      className={classNames(
        classes.button,
        active ? classes.active : undefined
      )}
      {...rest}
    >
      {title}
      { icon && <img src={`/images/icons/${icon}.svg`} alt="#" className={classes.icon} />}
    </Button>
  );
};
