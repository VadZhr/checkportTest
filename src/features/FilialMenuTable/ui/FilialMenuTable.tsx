import { Fragment, type FC, type ReactElement } from "react";

import { Box, Text } from "@radix-ui/themes";

import type { IFilialMenu } from "@/shared/api/data-models/filials";
import { ICONS, SIZES } from "../model/constants";

import classes from "./FilialMenuTable.module.scss";

interface IFilialMenuTableProps {
  data: IFilialMenu[];
}

const TableRow: FC<IFilialMenu> = ({
  name,
  filial,
  tt,
  active,
  exports,
}): ReactElement => {
  return (
    <Box className={classes.tableRowWrapper}>
      <Box className={classes.tableText}>
        <Box className={classes.adaptiveCell}>
          <Text className={classes.secondary}>Меню:</Text>
          <Text className={classes.text}>{name}</Text>
        </Box>
        <Box className={classes.adaptiveCell}>
          <Text className={classes.secondary}>Филиал:</Text>
          <Text className={classes.text}>{filial.name}</Text>
        </Box>
        <Box className={classes.adaptiveCell}>
          <Text className={classes.secondary}>Торговая точка:</Text>
          <Text className={classes.text}>{tt.name}</Text>
        </Box>
        <Box className={classes.adaptiveCell}>
          <Text className={classes.secondary}>Активно</Text>
          <Text className={classes.text}>
            {active ? "Активно" : "Не активно"}
          </Text>
        </Box>
        <Box className={classes.adaptiveCell}>
          <Text className={classes.secondary}>Экспорт</Text>
          <Box>
            {exports?.length ? (
              exports?.map((el) => (
                <Text className={classes.text} key={el}>
                  {el}
                </Text>
              ))
            ) : (
              <Text className={classes.text}>-</Text>
            )}
          </Box>
        </Box>
      </Box>
      <Box className={classes.buttons}>
        {ICONS.map((icon) => (
          <Box style={{ ...SIZES }} key={icon}>
            <img src={`/images/icons/${icon}`} alt="#" />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export const FilialMenuTable: FC<IFilialMenuTableProps> = ({
  data,
}): ReactElement => {
  return (
    <Box className={classes.wrapper}>
      {data?.map((el) => (
        <Fragment key={el.id}>
          <TableRow {...el} />
          <Box className={classes.divider} />
        </Fragment>
      ))}
    </Box>
  );
};
