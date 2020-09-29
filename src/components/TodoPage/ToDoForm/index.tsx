import React, { useState } from "react";

interface ToDoFormProps {
  onAdd(title: string): void;
}

const ToDoForm: React.FC<ToDoFormProps> = (props) => {
  const [title, setTitle] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      props.onAdd(title)
      setTitle((prevValue) => (prevValue = ""));
    }
  };

  return (
    <div className="imput-field mt2">
      <input
        type="text"
        id="title"
        placeholder="Название дела"
        value={title}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      <label htmlFor="title" className="active">
        {" "}
        Введите название дела
      </label>
    </div>
  );
};
export default ToDoForm;
