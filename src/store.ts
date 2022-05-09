import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export interface Todo {
  id: number;
  text: string;
  active: boolean;
  done: boolean;
}

const TODOS = 'Todos';

export const todoApi = createApi({
  reducerPath: 'todoApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/' }),
  tagTypes: [TODOS],
  endpoints: build => ({
    getAll: build.query<Todo[], void>({
      query: () => `todos`,
      providesTags: [{ type: TODOS, id: 'LIST' }],
    }),
  }),
});
