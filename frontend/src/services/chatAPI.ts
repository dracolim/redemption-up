import { buildServiceUrl, rootApi } from "@/services/index";

const prefix = "/chat";

export const chatApi = rootApi.injectEndpoints({
  endpoints: (build) => ({
    getChat: build.query<any, any>({
      query: (query) => buildServiceUrl(prefix, `/chat?query=${query.query}&language=${query.language}`),
    }),
  }),
  overrideExisting: false,
});

export const { useLazyGetChatQuery } = chatApi;