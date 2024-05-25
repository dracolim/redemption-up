// Or from '@reduxjs/toolkit/query' if not using the auto-generated hooks
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import type { ReduxState } from "@/lib/redux/store";

export const devUrl = "http://localhost:8080";
export const productionUrl = "https://api.startr.me";

// Used for testing the remote backend
// export const productionUrl = "http://localhost:8080";
// export const devUrl = "https://api.startr.me";

export const buildServiceUrl = (prefix: string, query: string) => {
  return `${
    process.env.NODE_ENV === "development" ? devUrl : productionUrl
  }${prefix}${query}`;
};

// initialize an empty api service that we'll inject endpoints into later as needed
export const rootApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "http://",
    prepareHeaders: (headers, { getState }) => {
      // @ts-expect-error Weird TS stuff
      const token = (getState() as ReduxState).userInfoSlice?.access_token;
      if (token && token.length > 0) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: () => ({}),
});
