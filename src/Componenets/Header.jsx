import PropTypes from "prop-types";

Header.propTypes = {
  todos: PropTypes.array.isRequired,
};

export function Header(props) {
  const { todos } = props;
  const todosLength = todos.length;
  const isTasksPlural = todos.length != 1;
  const taskOrTasks = isTasksPlural ? "tasks" : "task";
  return (
    <header>
      <h1 className="text-gradient">
        You have {todosLength} open {taskOrTasks}
      </h1>
    </header>
  );
}
