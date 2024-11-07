import PropTypes from "prop-types";

//Prop-Types
TodoCard.propTypes = {
  todo: PropTypes.object.isRequired,
  todoIndex: PropTypes.number.isRequired,
  handleDeleteTodo: PropTypes.func.isRequired,
  handleCompleteTodo: PropTypes.func.isRequired,
};

export function TodoCard(props) {
  const { todo, handleDeleteTodo, todoIndex, handleCompleteTodo } = props;

  return (
    <div className="card todo-item">
      <p>{todo.input}</p>
      <div className="todo-button">
        <button
          onClick={() => {
            handleCompleteTodo(todoIndex);
          }}
          disabled={todo.complete}
        >
          <h6>Done</h6>
        </button>
        <button
          onClick={() => {
            handleDeleteTodo(todoIndex);
          }}
        >
          <h6>Delete</h6>
        </button>
      </div>
    </div>
  );
}
