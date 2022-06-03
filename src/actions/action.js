export const ADD_TODO = 'ADD_TODO'

let todoId = 0;

export function addToDo(text){
    return{
        type: ADD_TODO,
        id: todoId ++,
        text
    }
}