import {createApi} from '@reduxjs/toolkit/query/react';
import {axiosBaseQuery} from '../services/api/baseQuery';
import {API_ENDPOINTS, HTTP_METHOD} from '@/utils/constants/api';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: axiosBaseQuery,
  tagTypes: ['Auth'],
  endpoints: builder => ({
    // UserInfoInsert
    userInfoInsert: builder.mutation<any, any>({
      query: credentials => ({
        url: API_ENDPOINTS.AUTH.LOGIN,
        method: HTTP_METHOD.POST,
        data: credentials,
      }),
      invalidatesTags: ['Auth'],
    }),

    // EntityProfileInsert
    entityProfileInsert: builder.mutation<any, any>({
      query: credentials => ({
        url: API_ENDPOINTS.AUTH.LOGIN,
        method: HTTP_METHOD.POST,
        data: credentials,
      }),
      invalidatesTags: ['Auth'],
    }),
  }),
});

export const {useUserInfoInsertMutation, useEntityProfileInsertMutation} =
  authApi;
