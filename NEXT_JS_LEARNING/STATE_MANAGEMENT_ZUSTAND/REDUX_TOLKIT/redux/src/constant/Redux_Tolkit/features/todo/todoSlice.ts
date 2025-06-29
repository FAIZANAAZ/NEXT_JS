import { createSlice ,nanoid } from "@reduxjs/toolkit";

// hm ak initial state bnaty hen jismy ye likhty hen ke start me hmara kam kesa dikhyga 
const initialState = {
  todos: [ {id: "1", text: "hello world"}],
};
////////////////////////


// hm isko object ya array koch bhi rkh skty hen abhi hmny ak object rkha he 
export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    // ye hm nichy bhi bna skty thy but alag sy bna diya taky saf lgy 
    reducers:{
     addTodo:(state,action)=>{
        const newTodo = {
            id: nanoid(), // nanoid se unique id generate hoti he
            text: action.payload,
            // hm action.pyload sy nial rhy hen wo chiz jo user behjra he 
            // pyload bhi akobject he ismy multipe chizen a skti hen 
          }
          state.todos.push(newTodo)
            // hm state.todos me newTodo ko push krty hen yani add krty hen
     },

    //  //////////////////////////////
     removeTodo:(state,action)=>{
        state.todos = state.todos.filter((todo) => todo.id !== action.payload);
     }
    }

    // ismy jo bhi  functions hoty hen wo do perameters lety hen ak state or action
    // state yani jo hmara initialState hota he wo or action yani jo bhi hm action perform krty hen uski information hoti he yani koch agr add howa to ismy wo ajata he jesy ismy id ai ab hmy id chiye hogi remove krny ke liye tohm action sy nikal sy skty hen ye dono ak object hen apny ap me 
})
//YE 3 properties leta he name , initialState , reducers lazmi

// nme yani os chiz ka name jisky liye hm ye bnary hen or initialState yani start me hmara kam kesa dikhyga or reducers yani jo jo functionality hm use krna chhaty hen wo isky ander aygy ismy properties ati hen object ki jisky  ander hm function dety hen

/////////////////////////////
export const { addTodo, removeTodo } = todoSlice.actions;
// hmne jo reducers bnaye thy unko export krty hen taki hm use kr sky jistny or prperty hongi sb export hongi

export default todoSlice.reducer;
// isko hmy store me pas krna hota he taky osko pta lgy k yha sy ara he 