import { ITodo } from "../../models/todo/todo.interface";
import { ITodoRepository } from "./todo.repo-interface";
import { v4 as uuid4 } from "uuid";
import { TodoStatusEnum } from "../../models/todo/todo-status.enum";

export class InMemoryTodoRepoImplementation implements ITodoRepository {
  todos: ITodo[] = [
    {
      id: uuid4(),
      item: "Buy eggs",
      status: TodoStatusEnum.InProgress,
    },
    {
      id: uuid4(),
      item: "Slice tomatoes",
      status: TodoStatusEnum.InProgress,
    },
    {
      id: uuid4(),
      item: "Shake avocado",
      status: TodoStatusEnum.InProgress,
    },
    {
      id: uuid4(),
      item: "Cook noodles with egg",
      status: TodoStatusEnum.Completed,
    },
    {
      id: uuid4(),
      item: "I do not know what to do with scampi",
      status: TodoStatusEnum.Completed,
    },
    {
      id: uuid4(),
      item: "drink orange juice",
      status: TodoStatusEnum.Completed,
    },
    {
      id: uuid4(),
      item: "Cut apples",
      status: TodoStatusEnum.Completed,
    },
  ];

  getAllTodos = (): Promise<ITodo[]> => Promise.resolve(this.todos);
}
