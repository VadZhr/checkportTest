import {
  createApi,
  fetchBaseQuery,
  type FetchArgs,
} from "@reduxjs/toolkit/query/react";

import { API_BASE, GET_FILIALS } from "../../constants/requestUrls";
import type {
  IBaseEntity,
  IFilialMenuRequest,
  IFilialMenuResponse,
} from "../data-models/filials";

// export const filialsApi = createApi({
//   reducerPath: "filialsApi",
//   baseQuery: fetchBaseQuery({ baseUrl: `${API_BASE}` }),
//   endpoints: (builder) => ({
//     getFilials: builder.query<IBaseEntity[], void>({
//       query: (): string => `${GET_FILIALS}`,
//     }),
//     getFilialMenu: builder.query<IFilialMenuResponse, IFilialMenuRequest>({
//       query: ({ id, ...rest }): FetchArgs => ({
//         url: `${GET_FILIALS}/${id}/menu`,
//         params: {...rest},
//       }),
//     }),
//   }),
// });

export const filialsApi = createApi({
  reducerPath: "filialsApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE }),
  endpoints: (builder) => ({
    getFilials: builder.query<IBaseEntity[], void>({
      query: (): FetchArgs => ({
        url: "",
        params: {
          url: GET_FILIALS,
        },
      }),
    }),
    getFilialMenu: builder.query<IFilialMenuResponse, IFilialMenuRequest>({
      query: ({ id, ...rest }): FetchArgs => ({
        url: "",
        params: {
          url: `${GET_FILIALS}/${id}/menu/`,
          ...rest,
        },
      }),
    }),
  }),
});

export const { useGetFilialsQuery, useGetFilialMenuQuery } = filialsApi;
