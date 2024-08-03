import React, { useState } from "react";
import "./Tasks.scss";

const initialData = {
  tasks: {
    upcoming: 12,
    today: 5,
  },
  lists: [
    { name: "Personal", count: 3, tasks: ["Task 1", "Task 2", "Task 3"] },
    {
      name: "Work",
      count: 6,
      tasks: ["Task A", "Task B", "Task C", "Task D", "Task E", "Task F"],
    },
    { name: "List 1", count: 3, tasks: ["Task X", "Task Y", "Task Z"] },
  ],
  tags: ["Tag 1", "Tag 2"],
};

export function Tasks() {
  const [lists, setLists] = useState(initialData.lists);
  const [activeListIndex, setActiveListIndex] = useState(0);
  const [completedTasks, setCompletedTasks] = useState(
    lists.map((list) => new Array(list.tasks.length).fill(false))
  );
  const [searchQuery, setSearchQuery] = useState("");

  const addNewList = () => {
    const newList = { name: `List ${lists.length + 1}`, count: 0, tasks: [] };
    setLists([...lists, newList]);
  };

  const handleCheckboxChange = (taskIndex) => {
    const newCompletedTasks = [...completedTasks];
    newCompletedTasks[activeListIndex][taskIndex] =
      !newCompletedTasks[activeListIndex][taskIndex];
    setCompletedTasks(newCompletedTasks);
  };

  const handleListClick = (index) => {
    setActiveListIndex(index);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredLists = lists.filter((list) =>
    list.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const colors = ["#ff6b6b", "#66d9e8", "#ffd43b", "#3ad22c", "#b53ac0"];

  return (
    <div className="tasks-container">
      <div className="menu">
        <div className="TextWrapper">
          <h2>Menu</h2>
          <i className="fa fa-sliders" aria-hidden="true"></i>
        </div>
        <div className="search">
          <i className="fa fa-search search-icon icon" aria-hidden="true"></i>
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>

        <div className="lists">
          <h3>Tasks</h3>
          <ul className="sectionWrapper">
            <li className="section">
              <div className="leftWrapper">
                <i className="fa fa-angle-double-right" aria-hidden="true"></i>
                Upcoming
              </div>
              <span className="count">{initialData.tasks.upcoming}</span>
            </li>
            <li className="section">
              <div className="leftWrapper">
                <i className="fa fa-check-square" aria-hidden="true"></i>
                Today
              </div>
              <span className="count">{initialData.tasks.today}</span>
            </li>
            <li className="section">
              <div className="leftWrapper">
                <i className="fa fa-calendar" aria-hidden="true"></i>
                Calendar
              </div>
            </li>
            <li className="section">
              <div className="leftWrapper">
                <i className="fa fa-sticky-note" aria-hidden="true"></i>
                Sticky Wall
              </div>
            </li>
          </ul>
        </div>
        <div className="lists">
          <h3>Lists</h3>
          <ul className="sectionWrapper">
            {filteredLists.map((list, index) => (
              <li
                className={`section ${
                  index === activeListIndex ? "active" : ""
                }`}
                key={index}
                onClick={() => handleListClick(index)}
              >
                <div className="leftWrapper">
                  <div
                    className="cube"
                    style={{ backgroundColor: colors[index % colors.length] }}
                  ></div>
                  {list.name}
                </div>
                <span className="count">{list.count}</span>
              </li>
            ))}
          </ul>
        </div>
        <button className="addListButton" onClick={addNewList}>
          <i className="fa fa-plus"></i> Add New List
        </button>
        <div className="tags">
          <h3>Tags</h3>
          {initialData.tags.map((tag, index) => (
            <div key={index} className="tag">
              {tag}
            </div>
          ))}
          <button>+ Add Tag</button>
        </div>
      </div>
      <div className="tasks-list">
        <h2>
          {lists[activeListIndex].name}{" "}
          <span className="number">{lists[activeListIndex].count}</span>
        </h2>
        <div className="search">
          <i className="fa fa-plus icon"></i>
          <input type="text" placeholder="Add New Task" />
        </div>
        <ul className="taslUl">
          {lists[activeListIndex].tasks.map((task, index) => (
            <li key={index} className="task-item">
              <input
                type="checkbox"
                checked={completedTasks[activeListIndex][index]}
                onChange={() => handleCheckboxChange(index)}
              />
              <span
                className={
                  completedTasks[activeListIndex][index] ? "completed" : ""
                }
              >
                {task}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
