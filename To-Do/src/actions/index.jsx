export const addTodo=(data)=>{
    return{
        type: "ADD",
        payload:{
            id:new Date().getTime().toString(),
            data: data
        }
    }
}
export const delTodo = (id ) => { 
    return {
        type: "DEl",
        id:id,
    }
}
export const editTodo = () => {
    return {
        type: "EDIT"
    }
}
