import React from "react";
import { ITodo } from "../../../interfaces";
import ToDoForm from "../ToDoForm";

type ToDoListProps = {
  todos: ITodo[];
  onToggle(id: number): void;
  onRemove(id: number): void;
};

const ToDoList: React.FC<ToDoListProps> = ({ todos, onToggle, onRemove }) => {
  if (todos.length === 0) {
    return <p className="center">Пока дел нет</p>;
  }
  return (
    <ul>
      {todos.map((todo) => {
        const dinamicClass = ["todo"];
        if (todo.completed) {
          dinamicClass.push("completed");
        }

        return (
          <li className={dinamicClass.join(" ")} key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => onToggle(todo.id)}
              />
              <span>{todo.title}</span>
              <i
                className="material-icons red-text"
                onClick={() => onRemove(todo.id)}
              >
                delete
              </i>
            </label>
          </li>
        );
      })}
    </ul>
  );
};
export default ToDoList;
