import axios from "axios";
import React, { useEffect, useState } from "react";
import InputForm from "../components/InputForm";
import TodoList from "../components/TodoList";

const url = "https://6405db5a40597b65de4320e7.mockapi.io/todos";

interface TodoType {
  id: string | number;
  task: string;
  inDone: boolean;
}

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
  useEffect(() => {
    getTodos();
  }, []);
  return (
    <div className="main">
      <InputForm />
      <TodoList />
    </div>
  );
};

export default Home;
