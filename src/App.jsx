function App() {
  return (
    <div className="appContainer">
      <div className="inputContainer">
        <input type="text" placeholder="Enter your task here..." />
        <button className="mainButton">Add Task</button>
      </div>
      <ul className="toDoList"></ul>
    </div>
  );
}

export default App;
