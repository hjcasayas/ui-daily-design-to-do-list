import { ITodo } from "../../models/todo/todo.interface";

export interface ITodoRepository {
  getAllTodos: () => Promise<ITodo[]>;
}
