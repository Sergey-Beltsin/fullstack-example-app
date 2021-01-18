import { createStore, createEvent } from 'effector';
import { ITodoItem, ITodosStore } from './store-types';

const todos: ITodoItem[] = [
  {
    text: 'asdasdasdasdasdasdasdasdasdasdasdasdadasasddas',
  },
  {
    text: 'asdasdasdasdasdasdasdasdasdasdasdasdadasasddas',
  },
  {
    text: 'asdasdasdasdasdasdasdasdasdasdasdasdadasasddas',
  },
  {
    text: 'asdasdasdasdasdasdasdasdasdasdasdasdadasasddas',
  },
  {
    text: 'asdasdasdasdasdasdasdasdasdasdasdasdadasasddas',
  },
  {
    text: 'asdasdasdasdasdasdasdasdasdasdasdasdadasasddas',
  },
];

export const handleInput = createEvent<string>();

export const $todos = createStore<ITodosStore>({
  todos,
  inputValue: '',
})
  .on(handleInput, (state, value) => ({ ...state, inputValue: value }));
