import {
    ADD,
    DELATE,
    UPDATE,
    COMPLETE
} from "./types";
export const addTodo =(input)=>{
    return{
        type:ADD,
        payload:input
    };
};
export const delateTodo =(id)=>{
    return{
        type:DELATE,
        payload:id
    };
};
export const competeTodo =(id)=>{
    return{
        type:COMPLETE,
        payload:id
    };
};