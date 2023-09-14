import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { todoReducer } from './todo';


export const rootReducer = combineReducers({
    user: userReducer,
    todo: todoReducer
});

export type RootState = ReturnType<typeof rootReducer>