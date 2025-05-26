import { type FC, type ReactElement } from "react";

import { useGetFilialsQuery } from "@/shared/api/query/filialsApi";
import { Dropdown } from "@/shared/ui/Dropdown/Dropdown";
import { Loader } from "@/shared/ui/Loader/Loader";
import { Box, Text } from "@radix-ui/themes";

import classes from "@/widgets/MainPageSidebar/MainPageSideBar.module.scss";
import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/shared/store/hooks";
import {
  filialSelector,
  updateCurrentFilialId,
} from "@/shared/store/slices/filialSlice";

export const MainPageSidebar: FC = (): ReactElement => {
  const { currentFilialId } = useAppSelector(filialSelector);

  const dispatch = useAppDispatch();

  const {
    data: filials,
    isLoading: isFilialsLoading,
    isError,
  } = useGetFilialsQuery();

  const handleCurrenFilialIdChange = (value: string): void => {
    dispatch(updateCurrentFilialId({ newFilialId: value }));
  };

  if (isFilialsLoading) {
    return (
      <Box className={classes.loader}>
        <Loader />
      </Box>
    );
  }

  if (isError) {
    return <div>Ошибка</div>;
  }

  return (
    <Box className={classes.wrapper}>
      <Box className={classes.staticContent}>
        <Box className={classes.info}>
          <Box className={classes.circle}>
            <Text size="4" className={classes.circleText}>
              Ф
            </Text>
          </Box>
          <Box className={classes.companyName}>
            <Text size="4" className={classes.primary}>
              НАЗВАНИЕ ФИРМЫ
            </Text>
            <Text size="3" className={classes.secondary}>
              Лоскутникова В.П.
            </Text>
          </Box>
        </Box>
        <Box className={classes.horizontalLine} width="232px"></Box>
        <Box className={classes.infoAccounting}>
          <img src="/images/sidebar/docs.png" alt="" />
          <Box className={classes.accounting}>
            <Text size="4" className={classes.primary}>
              СКЛАДСКОЙ УЧЁТ
            </Text>
          </Box>
        </Box>
      </Box>
      <Dropdown
        options={filials ?? []}
        label="Филиалы"
        value={currentFilialId}
        onChange={handleCurrenFilialIdChange}
      />
      <Box
        className={classes.horizontalLine}
        width="250px"
        style={{ marginBottom: 10 }}
      ></Box>
      <Box className={classes.navigation}>
        <NavLink
          to="/components"
          className={({ isActive }) => (isActive ? classes.isActive : "")}
        >
          - Компоненты
        </NavLink>
        <NavLink
          to="/semi-finished"
          className={({ isActive }) => (isActive ? classes.isActive : "")}
        >
          - Полуфабрикаты
        </NavLink>
        <NavLink
          to="/products"
          className={({ isActive }) => (isActive ? classes.isActive : "")}
        >
          - Товары
        </NavLink>
        <NavLink
          to={`/menu`}
          className={({ isActive }) => (isActive ? classes.isActive : "")}
        >
          - Меню
        </NavLink>
        <NavLink
          to="/moving"
          className={({ isActive }) => (isActive ? classes.isActive : "")}
        >
          - Перемещения
        </NavLink>
        <NavLink
          to="/inventory"
          className={({ isActive }) => (isActive ? classes.isActive : "")}
        >
          - Инвенатризация
        </NavLink>
        <NavLink
          to="/product-release"
          className={({ isActive }) => (isActive ? classes.isActive : "")}
        >
          - Выпуск товара
        </NavLink>
        <NavLink
          to="/write-offs"
          className={({ isActive }) => (isActive ? classes.isActive : "")}
        >
          - Списания
        </NavLink>
        <NavLink
          to="/bills"
          className={({ isActive }) => (isActive ? classes.isActive : "")}
        >
          - Накладные
        </NavLink>
      </Box>
    </Box>
  );
};
