import type { ChatBubbleProps } from "@/features/chat";

import { buildServiceUrl, rootApi } from "@/services/index";

const prefix = "/chat";

export const chatApi = rootApi.injectEndpoints({
  endpoints: (build) => ({
    getChat: build.query<ChatBubbleProps, string>({
      query: (query) => buildServiceUrl(prefix, `/chat?query=${query}`),
    }),
  }),
  overrideExisting: false,
});

export const { useLazyGetChatQuery } = chatApi;