import axios from "axios";
import React, { useEffect, useState } from "react";
import InputForm from "../components/InputForm";
import TodoList from "../components/TodoList";

const url = "https://6405db5a40597b65de4320e7.mockapi.io/todos";

const Home = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);

  const getTodos = async () => {
    try {
      const { data } = await axios.get<TodoType[]>(url);
      setTodos(data);
    } catch (error) {
      console.log(error);
    }
  };

  const addTodo: addFn = async (text) => {
    const newTodo = {
      task: text,
      isDone: false,
    };
    try {
      await axios.post<TodoType[]>(url, newTodo);
      getTodos();
    } catch (error) {
      console.log(error);
    }
  };

  const toggleTodo: toggleFn = async (item) => {
    try {
      await axios.put<TodoType[]>(`${url}/${item.id}`, {
        ...item,
        isDone: !item.isDone,
      });
       getTodos();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTodo: deleteFn = async (id) => {
    try {
      await axios.delete<TodoType[]>(`${url}/${id}`);
       getTodos();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);
  return (
    <div className="main">
      <InputForm addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
};

export default Home;
