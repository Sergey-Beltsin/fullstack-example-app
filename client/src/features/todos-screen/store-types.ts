export interface ITodoItem {
  title: string;
  id: string;
  isActive: boolean;
}

export interface ITodosStore {
  todos: ITodoItem[];
  inputValue: string;
}
