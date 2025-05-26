import type { IBaseEntity } from "@/shared/models/globalEntities";

type activeProperty = "active" | "no_active" | "";

interface IFilialMenuRequest {
  id: number;
  page?: number;
  limit?: number;
  name?: string;
  filial?: string;
  tt?: string;
  active?: activeProperty;
}

interface IFilialMenu extends IBaseEntity {
  filial: IBaseEntity;
  tt: IBaseEntity;
  active: boolean;
  exports: string[];
}

interface IFilialMenuResponse {
  max_pages: number;
  data: IFilialMenu[];
}

export type {
  IFilialMenu,
  IFilialMenuRequest,
  IBaseEntity,
  activeProperty,
  IFilialMenuResponse,
};
