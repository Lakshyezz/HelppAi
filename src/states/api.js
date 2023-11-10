import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";



export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
    reducerPath: "main",
    tagTypes: [],       // used to store data although we not storing data on frontend we pushing it to backend directly

    endpoints: (build) => ({
        postAiText: build.mutation({            // fancy term but all it is used to make post api req.
            query: (payload) => ({
                url: "openai/text",
                method: "POST",
                body: payload
            })
        })
    })
})

export const { usePostAiTextMutation } = api;