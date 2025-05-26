import { useEffect, type FC, type ReactElement } from "react";
import { Box, Text } from "@radix-ui/themes";

import { useAppDispatch, useAppSelector } from "@/shared/store/hooks";
import { filialSelector } from "@/shared/store/slices/filialSlice";
import { useGetFilialMenuQuery } from "@/shared/api/query/filialsApi";
import {
  filtersSelector,
  updateFilters,
} from "@/shared/store/slices/menuFiltersSlice";
import { Loader } from "@/shared/ui/Loader/Loader";
import { Pagination } from "@/features/Pagination/ui/Pagination";

import { FilialMenuTable } from "@/features/FilialMenuTable/ui/FilialMenuTable";
import { MenuFilters } from "@/features/MenuFilters/ui/MenuFIlters";

import classes from "./FilialMenuLayout.module.scss";

export const FilialMenuLayout: FC = (): ReactElement => {
  const { currentFilialId } = useAppSelector(filialSelector);

  const filters = useAppSelector(filtersSelector);

  const dispatch = useAppDispatch();

  const filialIdIsNotSelected = currentFilialId == "0" || !currentFilialId;

  const { data, isLoading, isFetching, isError } = useGetFilialMenuQuery(
    {
      id: +currentFilialId,
      ...filters,
    },
    {
      skip: filialIdIsNotSelected,
    }
  );

  const maxPages = data?.max_pages;

  const handleClickLeft = (): void => {
    if (filters.page && filters.page !== 1) {
      dispatch(updateFilters({ page: filters.page - 1 }));
    }
  };

  const handleClick = (value: number) => {
    dispatch(updateFilters({ page: value }));
  };

  const handleClickRight = (): void => {
    if (filters.page && filters.page !== maxPages) {
      dispatch(updateFilters({ page: filters.page + 1 }));
    }
  };

  useEffect(() => {
    dispatch(updateFilters({ page: 1 }));
  }, [currentFilialId, dispatch]);

  if (isError) {
    return (
      <Text size="4" className={classes.secondaryText}>
        Ошибка
      </Text>
    );
  }

  return (
    <Box className={classes.wrapper}>
      <Box className={classes.top}>
        <Box>
          <MenuFilters />
          <Box className={classes.divider} />
        </Box>
        {isLoading || isFetching ? (
          <Box className={classes.loader}>
            <Loader />
          </Box>
        ) : data?.data?.length ? (
          <FilialMenuTable data={data.data} />
        ) : (
          <Text className={classes.text} size="4">
            {filialIdIsNotSelected ? "Выберите филиал" : "Нет данных"}
          </Text>
        )}
      </Box>
      {maxPages && (
        <Pagination
          maxPages={maxPages}
          currentPage={filters?.page || 1}
          onClickLeft={handleClickLeft}
          onClick={handleClick}
          onClickRight={handleClickRight}
        />
      )}
    </Box>
  );
};
