const initialState={
    list: []
}

const todoReducers=(state=initialState,action)=>{
    switch(action.type){
        case "ADD" :{

        const {id,data} =action.payload;

        return{
            ...state, 
            list: [
                ...state.list,
                {
                    id:id,
                    data:data,
                }
                
            ]
        }
    }
        case "DEL" :{
            const newList= state.list.filter((elem) => elem.id !== action.id)
            return{
                ...state,
                list:newList,
            }

        }
    
        default: return state;
    }
};

export default todoReducers;