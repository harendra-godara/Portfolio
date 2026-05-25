import { useReducer, useState } from "react";

const initialState = [];

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,

        {
          id: Date.now(),
          text: action.payload,
          completed: false,
        },
      ];

    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.payload);

    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.payload
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo,
      );

    default:
      return state;
  }
}

export default function Todo() {
  const [todos, dispatch] = useReducer(reducer, initialState);

  const [input, setInput] = useState("");

  const handleAddTodo = () => {
    if (!input) return;

    dispatch({
      type: "ADD_TODO",
      payload: input,
    });

    setInput("");
  };

  return (
    <div className="todo-page">
      <div className="todo-container">
        <h1>Todo App</h1>

        <div className="todo-input">
          <input
            type="text"
            placeholder="Enter todo"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <button className="btn" onClick={handleAddTodo}>
            Add
          </button>
        </div>

        <div className="todo-list">
          {todos.map((todo) => (
            <div className="todo-item" key={todo.id}>
              <p
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
              >
                {todo.text}
              </p>

              <div className="todo-buttons">
                <button
                  className="btn"
                  onClick={() =>
                    dispatch({
                      type: "TOGGLE_TODO",
                      payload: todo.id,
                    })
                  }
                >
                  Done
                </button>

                <button
                  className="btn"
                  onClick={() =>
                    dispatch({
                      type: "DELETE_TODO",
                      payload: todo.id,
                    })
                  }
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
