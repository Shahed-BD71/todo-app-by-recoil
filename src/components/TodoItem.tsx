import React from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { TodoCompleteState, TodoContentState } from "../recoil/TodoState";
import { TodoContent } from "../types.d";

const TodoItem = (props: TodoContent) => {
  const { title, id, description } = props;
  const [isComplete, setIsComplete] = useRecoilState(
    TodoCompleteState(props.id)
  );
  const setTodoItems = useSetRecoilState(TodoContentState);

  //logical operation..
  const toggleComplete = () => {
    setIsComplete((PrevState) => !PrevState);
  };

  const handleDelete = () => {
    setTodoItems((items) => items.filter((item) => item.id !== id));
  };
  return (
    <div>
      <h2
        style={{
          textDecoration: isComplete ? "line-through" : "none",
        }}
      >
        {title}
      </h2>
      {description && <p>{description}</p>}
      <div>
        <button onClick={toggleComplete}>
          {isComplete ? "Not complete" : "Complete"}
        </button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default TodoItem;
