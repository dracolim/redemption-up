import { configureStore } from "@reduxjs/toolkit";

import { rootApi } from "@/services";

import { reducer } from "./rootReducer";

export const reduxStore = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rootApi.middleware),
});

/* Types */
export type ReduxStore = typeof reduxStore;
export type ReduxState = ReturnType<typeof reduxStore.getState>;
