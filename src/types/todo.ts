export interface TodoState {
    todos: any[],
    loading: boolean;
    error: null | string;
    page: number;
    limit: number
}

export enum TodoActionTypes {
    FETCH_TODOS = 'FETCH_TODOS',
    FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS',
    FETCH_TODOS_ERROR = 'FETCH_TODOS_ERROR',
    FETCH_TODOS_PAGE = 'FETCH_TODOS_PAGE',
}

export interface FetchTodoAction {
    type: TodoActionTypes.FETCH_TODOS;
}

export interface FetchTodoSuccessAction {
    type: TodoActionTypes.FETCH_TODOS_SUCCESS;
    payload: any[];
}

export interface FetchTodoErrorAction {
    type: TodoActionTypes.FETCH_TODOS_ERROR;
    payload: string;
}

export interface FetchTodoPageAction {
    type: TodoActionTypes.FETCH_TODOS_PAGE;
    payload: number;
}

export type TodoAction = FetchTodoAction | FetchTodoErrorAction | FetchTodoPageAction | FetchTodoSuccessAction;