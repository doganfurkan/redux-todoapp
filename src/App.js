import './App.css';
import Header from "./components/Header"
import Footer from "./components/Footer"
import Content from "./components/Content"
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './redux/todos/todosSlice';

function App() {
  
  const dispatch = useDispatch();

  useEffect(() => {
    if(localStorage.getItem("todos")){
      JSON.parse(localStorage.getItem("todos")).map(item => {
        dispatch(addTodo(item));
      })
    }
  })

  return (
    <>
      <Header/>
      <Content/>
      <Footer/>
    </>
  );
}

export default App;
