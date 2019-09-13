import React from "react";
import { match } from "react-router-dom";

interface TodoItemInterface {
  match: match<Identifiable>;
}

interface Identifiable {
  id: string;
}

export const TodoItem: React.FC<TodoItemInterface> = (
  props: TodoItemInterface
) => (
  <div>
    <h1>TodoItem: {props.match.params.id} </h1>
  </div>
);
