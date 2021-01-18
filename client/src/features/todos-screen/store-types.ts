export interface ITodoItem {
  text: string;
}

export interface ITodosStore {
  todos: ITodoItem[];
  inputValue: string;
}
