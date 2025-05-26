import {
  useCallback,
  useEffect,
  useState,
  type FC,
  type ReactElement,
} from "react";
import { Box, Text } from "@radix-ui/themes";

import { useDebounce } from "@/shared/hooks/useDebounce";
import {
  updateFilters,
  type FilialMenuFilters,
} from "@/shared/store/slices/menuFiltersSlice";
import { Dropdown } from "@/shared/ui/Dropdown/Dropdown";
import { Input } from "@/shared/ui/Input/ui/Input";
import { DROPDOWN_FILTER_OPTIONS } from "../model/constants";
import type { activeProperty } from "@/shared/api/data-models/filials";
import { useAppDispatch } from "@/shared/store/hooks";

import classes from "./MenuFIlters.module.scss";

export const MenuFilters: FC = (): ReactElement => {
  const [inputValues, setInputValues] = useState<FilialMenuFilters>({
    name: "",
    filial: "",
    tt: "",
    active: "",
    limit: 4,
    page: 1,
  });

  const debounceValue = useDebounce(inputValues, 400);

  const handleChange = useCallback(
    (field: keyof FilialMenuFilters) =>
      (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValues((prev) => ({ ...prev, [field]: e.target.value }));
      },
    []
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(updateFilters(debounceValue));
  }, [debounceValue, dispatch]);

  return (
    <Box className={classes.wrapper}>
      <Input
        value={inputValues.name}
        placeholder="Меню"
        onChange={handleChange("name")}
      />
      <Input
        value={inputValues.filial}
        placeholder="Филиал"
        onChange={handleChange("filial")}
      />
      <Input
        value={inputValues.tt}
        placeholder="Торговая точка"
        onChange={handleChange("tt")}
      />
      <Dropdown
        value={inputValues.active}
        placeholder="Активно"
        onChange={(value) =>
          setInputValues((prev) => ({
            ...prev,
            active: value as activeProperty,
          }))
        }
        width={127}
        fontSize={18}
        options={DROPDOWN_FILTER_OPTIONS}
      />
      <Text size={"4"} className={classes.text}>
        Экспорт
      </Text>
    </Box>
  );
};
