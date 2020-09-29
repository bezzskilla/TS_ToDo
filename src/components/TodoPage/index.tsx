import React, { useEffect, useState } from "react";
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";
import { ITodo } from "../../interfaces";

declare var confirm: (qustion: string) => boolean;

const ToDoPage: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("todos") || "[]") as ITodo[];
    setTodos(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (title: string) => {
    const newTodo: ITodo = {
      title: title,
      id: Date.now(),
      completed: false,
    };
    setTodos((prev) => [newTodo, ...prev]);
  };

  const toggleHandler = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) => {
        return {
          ...todo,
          completed: todo.id === id ? !todo.completed : todo.completed,
        };
      })
    );
  };
  const removeHandler = (id: number) => {
    const ShouldRemove = confirm("Вы уверены что хотите удалить элемент?");
    if (ShouldRemove) {
      setTodos((prev) => {
        return prev.filter((todo) => {
          return todo.id !== id;
        });
      });
    } else {
      toggleHandler(id);
    }
  };

  return (
    <>
      <ToDoForm onAdd={addTodo} />
      <ToDoList
        todos={todos}
        onToggle={toggleHandler}
        onRemove={removeHandler}
      />
    </>
  );
};

export default ToDoPage;
