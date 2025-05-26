import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/app/store/store";
import type { IFilialMenuRequest } from "@/shared/api/data-models/filials";

export type FilialMenuFilters = Omit<IFilialMenuRequest, "id">;

const initialState: FilialMenuFilters = {
  limit: 4,
  page: 1,
  name: "",
  filial: "",
  tt: "",
  active: "",
};

const menuFiltersSlice = createSlice({
  name: "menuFilters",
  initialState,
  reducers: {
    updateFilters: (state, action: PayloadAction<FilialMenuFilters>): void => {
      Object.assign(state, action.payload);
    },
  },
});

export const filtersSelector = (state: RootState): FilialMenuFilters =>
  state.menuFilters;

export const { updateFilters } = menuFiltersSlice.actions;

export default menuFiltersSlice.reducer;
