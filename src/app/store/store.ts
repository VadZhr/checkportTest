import {
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { filialsApi } from "@/shared/api/query/filialsApi";
import filialReducer from "@/shared/store/slices/filialSlice";
import menuFiltersReducer from "@/shared/store/slices/menuFiltersSlice";

const makeStore = () => {
  const store = configureStore({
    reducer: combineReducers({
      filial: filialReducer,
      menuFilters: menuFiltersReducer,
      [filialsApi.reducerPath]: filialsApi.reducer,
    }),
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
        immutableCheck: { warnAfter: 100 },
      }).concat([filialsApi.middleware,]),
  });

  setupListeners(store.dispatch);

  return store;
};

const store = makeStore();

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export { makeStore, store, type RootState, type AppDispatch };
