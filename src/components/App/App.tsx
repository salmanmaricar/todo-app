import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Nav from "../../views/Nav";
import Todo from "../../views/Todo";
import Login from "../../views/Login";
import { TodoItem } from "../../views/TodoItem";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Route exact path="/" component={Todo} />
        <Route path="/login" component={Login} />
        <Route path="/todo" component={Todo} />
        <Route exact path="/todo/:id" component={TodoItem} />
      </div>
    </BrowserRouter>
  );
};

export default App;
