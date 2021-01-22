import { createStore, createEvent, createEffect } from 'effector';
import { ITodoItem, ITodosStore } from './store-types';
import axios from '../../lib/config/axios';

export const handleInput = createEvent<string>();

export const handleFetchTodos = createEffect(async () => {
  const { data } = await axios.get('/todos');

  return data;
});

export const handleAddTodo = createEffect(async (value: string) => {
  try {
    await axios.post('/todos', { title: value });
    handleFetchTodos();
  } catch (err) {
    console.log(err);
  }
});

export const handleDeleteTodo = createEffect(async (id: string) => {
  try {
    await axios.delete(`/todos/${id}`);
    handleFetchTodos();
  } catch (err) {
    console.log(err);
  }
});

export const handleActiveTodo = createEffect(async (todo: ITodoItem) => {
  try {
    await axios.put(`/todos/${todo.id}`, { ...todo, isActive: !todo.isActive });
    handleFetchTodos();
  } catch (err) {
    console.log(err);
  }
});

export const $todos = createStore<ITodosStore>({
  todos: [],
  inputValue: '',
})
  .on(handleInput, (state, value) => ({ ...state, inputValue: value }))
  .on(handleFetchTodos.doneData, (state, data) => ({ ...state, todos: data }));
