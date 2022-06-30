import { TodoStatusEnum } from "./todo-status.enum";

export interface ITodo {
  id: string;
  item: string;
  status: TodoStatusEnum;
}
