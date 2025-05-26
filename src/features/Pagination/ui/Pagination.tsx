import type { FC, ReactElement } from "react";

import type { IPaginationProps } from "../model/types";

import classes from "./Pagination.module.scss";
import { Box } from "@radix-ui/themes";
import { CheckPortButton } from "@/shared/ui/Button/ui/CheckPortButton";

export const Pagination: FC<IPaginationProps> = ({
  maxPages,
  currentPage = 1,
  onClickLeft,
  onClickRight,
  onClick,
}): ReactElement => {
  const pagesArray: number[] = Array.from(
    { length: maxPages },
    (_, i) => i + 1
  );

  return (
    <Box className={classes.wrapper}>
      <CheckPortButton icon="left" onClick={() => onClickLeft()} />
      {pagesArray.map((value) => {
        const stringValue = String(value);
        return (
          <CheckPortButton
            title={stringValue}
            active={value === currentPage}
            onClick={() => onClick(value)}
            key={stringValue}
          />
        );
      })}
      <CheckPortButton icon="right" onClick={() => onClickRight()} />
    </Box>
  );
};
