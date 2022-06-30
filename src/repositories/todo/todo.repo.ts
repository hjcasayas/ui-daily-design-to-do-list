import { ITodo } from "../../models/todo/todo.interface";
import { InMemoryTodoRepoImplementation } from "./in-memory-todo.repo-implementation";
import { ITodoRepository } from "./todo.repo-interface";

export class TodoRepository implements ITodoRepository {
  constructor(private implementation: ITodoRepository) {}
  getAllTodos = async (): Promise<ITodo[]> => {
    try {
      return await this.implementation.getAllTodos();
    } catch (error) {
      console.log({ error, at: "TodoRepository" });
      throw error;
    }
  };
}

export const todoRepository = new TodoRepository(
  new InMemoryTodoRepoImplementation()
);
