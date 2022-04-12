import { TodoActionType } from "../shared/enum/todo-action-types.enum";
import { ActionParent } from "../actions/todo.actions";
import { Todo } from "../models/Todo";

const initialState: Todo[] = [
    {title: "Todo 1"},
    {title: "Todo 2"},
    {title: "Todo 3"}
];