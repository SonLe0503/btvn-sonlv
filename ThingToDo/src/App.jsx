import "./App.css";
import { useState } from "react";
import { FaSearch, FaPlus } from "react-icons/fa";

function App() {
  const [isShowInput, setIsShowInput] = useState("");
  const [filter, setFilter] = useState("all");
  const [listJob, setListJob] = useState([
    { task: "Learn JavaScript", completed: false },
    { task: "Learn React", completed: false },
    { task: "Build a React App", completed: false },
  ]);
  const [searchQuery, setSearchQuery] = useState("");
  const handleChangeShowInput = (textStr) => {
    if (isShowInput === textStr) {
      setIsShowInput("");
    } else {
      setIsShowInput(textStr);
    }
  };
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };
  const filteredJobs = listJob.filter((job) => {
    if (filter === "active") return !job.completed; // Công việc chưa hoàn thành
    if (filter === "completed") return job.completed; // Công việc đã hoàn thành
    return true; // Tất cả công việc
  }).filter(job => job.task.toLowerCase().includes(searchQuery.toLowerCase())); // Lọc theo từ khóa tìm kiếm
  const handleAddJob = (event) => {
    if (event.key === "Enter" && event.target.value.trim() !== "") {
      setListJob([...listJob, { task: event.target.value, completed: false }]);
      event.target.value = "";
    }
  };
  const handleToggleComplete = (index) => {
    const updatedJobs = [...listJob];
    updatedJobs[index].completed = !updatedJobs[index].completed;
    setListJob(updatedJobs);
  };
  return (
    <div className="App">
      <h1>THINGS TO DO</h1>
      {/* Nhóm checkbox */}
      {isShowInput === "addNew" && (
        <input type="text" placeholder="Add New" onKeyDown={handleAddJob} />
      )}
      {/* <input type="text" placeholder="Search" /> */}
      {isShowInput === "search" && (
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={handleSearchChange}
          onKeyDown={(event) => {
            if (event.key === "search") {
              event.preventDefault();
            }
          }}
        />
      )}
      <ul className="list-custom">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((elm, index) => (
            <li key={index} className={elm.completed ? "completed" : ""}>
              <input
                type="checkbox"
                checked={elm.completed}
                onChange={() => handleToggleComplete(index)}
              />
              {elm.task}
            </li>
          ))
        ) : (
          <li>No jobs found</li>
        )}
      </ul>
      <div className="footer">
        <div>
          <div onClick={() => handleChangeShowInput("addNew")}>
            <FaPlus />
          </div>
          <div onClick={() => handleChangeShowInput("search")}>
            <FaSearch />
          </div>
        </div>
        <span> {filteredJobs.length} items left</span>
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("active")}>Active</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
      </div>
    </div>
  );
}

export default App;
