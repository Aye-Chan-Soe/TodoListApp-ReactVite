import PropTypes from "prop-types";

//Prop-Types
Tabs.propTypes = {
  todos: PropTypes.array.isRequired,
  selectedTab: PropTypes.string.isRequired,
  setSelectedTab: PropTypes.func.isRequired,
};

export function Tabs(props) {
  const { todos, selectedTab, setSelectedTab } = props;

  //Tabs
  const tabs = ["All", "Open", "Completed"];

  return (
    <nav className="tab-container">
      {tabs.map((tab, tabIndex) => {
        const numOfTasks =
          tab === "All"
            ? todos.length
            : tab === "Open"
            ? todos.filter((val) => !val.complete).length
            : todos.filter((val) => val.complete).length;

        return (
          <button
            onClick={() => {
              setSelectedTab(tab);
            }}
            key={tabIndex}
            className={
              "tab-button" + (tab === selectedTab ? "tab-selected" : "")
            }
          >
            <h4>
              {tab} <span>{numOfTasks}</span>
            </h4>
          </button>
        );
      })}
      <hr />
    </nav>
  );
}
