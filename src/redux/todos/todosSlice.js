import {createSlice} from "@reduxjs/toolkit";

export const todosSlice = createSlice({
    name:'todos',
    initialState:{
        items:[
            {
                id: 1,
                title: "Learn React",
                completed: true
            },
            {
                id: 2,
                title: "Learn Redux",
                completed: false
            },
            {
                id: 3,
                title: "Learn React",
                completed: false
            },
            {
                id: 4,
                title: "Learn Redux",
                completed: false
            },
            {
                id: 5,
                title: "Learn React",
                completed: false
            },
            {
                id: 6,
                title: "Learn Redux",
                completed: false
            },
            {
                id: 7,
                title: "Learn React",
                completed: false
            },
            {
                id: 8,
                title: "Learn Redux",
                completed: false
            }
        ]
    },
    reducers:{}
})

export default todosSlice.reducer;