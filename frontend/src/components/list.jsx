/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
// eslint-disable-next-line react/prop-types

// eslint-disable-next-line react/prop-types
export function List({ todos }) {
  return (
    <div className="main">
      {todos.map(function (todo) {
        return (
          <div className="list">
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
            <button>
              {todo.completed === true ? "completed" : "mark as completed"}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default List;
