import {createSlice} from "@reduxjs/toolkit";
/* 
API İşlemleri-------------------

export const getTodosAsync = createAsyncThunk('todos/getTodosAsync', async () => {
    const res = await fetch('http://localhost:7000/todos');
    return await res.json();
})  */

export const todosSlice = createSlice({
    name:'todos',
    initialState:{
        items:[],
        activeFilter:"all",
        isLoading:false,
        error:null
    },
    reducers:{
        addTodo: (state, action) => {
            state.items.push(action.payload);
            localStorage.setItem("todos", JSON.stringify(state.items));
        },
        toggle: (state,action)=>{
            const {id} = action.payload;
            const item = state.items.find(item => item.id === id);
            item.completed = !item.completed;
            localStorage.setItem("todos", JSON.stringify(state.items));
        },
        destroy: (state, action) => {
            const id = action.payload;
            const filtered = state.items.filter(item => item.id !== id);
            state.items = filtered;
            localStorage.setItem("todos", JSON.stringify(state.items));
        },
        changeFilter: (state,action) => {
            state.activeFilter = action.payload;
        },
        allDone: (state) => {
            state.items.map((o) => {
                return  o.completed = true;
            })
        },
        destroyDones: (state) => {
            state.items = state.items.filter(item => item.completed === false);
            localStorage.setItem("todos", JSON.stringify(state.items));
        },
        destroyAll: (state) => {
            state.items = []
            localStorage.setItem("todos", JSON.stringify(state.items));
        },
        allNotDone: (state) => {
              state.items.map((o) => {
                return o.completed = false;
            })
            localStorage.setItem("todos", JSON.stringify(state.items));
        }
    },
/* 
API İşlemleri--------------------


extraReducers: {
        [getTodosAsync.pending]: (state,action) => {
            state.isLoading = true
        },
        [getTodosAsync.fulfilled]: (state,action) => {
            state.items = action.payload;
            state.isLoading = false;
        },
        [getTodosAsync.rejected]: (state,action) => {
            state.isLoading = false;
            state.error = action.error.message;
        }
    }   */ 
})

export const {addTodo,toggle,destroy,changeFilter,allDone,destroyDones,destroyAll,allNotDone} = todosSlice.actions;
export default todosSlice.reducer;