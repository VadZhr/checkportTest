import type { IBaseEntity } from "@/shared/models/globalEntities";

const DROPDOWN_FILTER_OPTIONS: IBaseEntity[] = [
  {
    id: "active",
    name: "Активно",
  },
  {
    id: "no_active",
    name: "Не активно",
  },
];

export {
    DROPDOWN_FILTER_OPTIONS,
};
