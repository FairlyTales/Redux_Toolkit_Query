import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export interface Todo {
  id: number;
  text: string;
  active: boolean;
  done: boolean;
}

const TODOS = 'Todos';
const LIST = 'LIST';

export const todoApi = createApi({
  reducerPath: 'todoApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/' }),
  tagTypes: [TODOS],
  endpoints: (build) => ({
    getAll: build.query<Todo[], void>({
      query: () => `todos`,
      providesTags: [{ type: TODOS, id: LIST }],
    }),
    updateTodo: build.mutation<Todo, Todo>({
      query: (todo: Todo) => ({
        url: `todos/${todo.id}`,
        method: 'PUT',
        body: todo,
      }),
      invalidatesTags: [{ type: TODOS, id: LIST }],
    }),
    deleteTodo: build.mutation<Todo, Todo>({
      query: (todo: Todo) => ({
        url: `todos/${todo.id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: TODOS, id: LIST }],
    }),
  }),
});
