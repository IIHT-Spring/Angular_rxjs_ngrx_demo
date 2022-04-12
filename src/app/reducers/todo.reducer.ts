import { TodoActionType } from "../shared/enum/todo-action-types.enum";
import { ActionParent } from "../actions/todo.actions";
import { Todo } from "../models/Todo";

export const initialState: Todo[] = [
    {title: ""},
   
]; 

export function TodoReducer(state = initialState, action: ActionParent){
    switch(action.type){
        case TodoActionType.Add:
            return [...state, action.payload]
        default: return state;
    }
}