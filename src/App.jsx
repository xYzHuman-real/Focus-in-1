import React, { useState } from "react";

export default function App() {
  const [tab, setTab] = useState("home");
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");
  const [habits, setHabits] = useState(["Study", "Exercise", "Reading"]);
  const [completedHabits, setCompletedHabits] = useState([]);
  const [focusTime, setFocusTime] = useState(25);

  const addTask = () => {
    if (!taskInput) return;
    setTasks([...tasks, { name: taskInput, done: false }]);
    setTaskInput("");
  };

  const toggleTask = (index) => {
    const updated = [...tasks];
    updated[index].done = !updated[index].done;
    setTasks(updated);
  };

  const toggleHabit = (habit) => {
    if (completedHabits.includes(habit)) {
      setCompletedHabits(completedHabits.filter((h) => h !== habit));
    } else {
      setCompletedHabits([...completedHabits, habit]);
    }
  };

  const Home = () => (
    <div>
      <h2>Today's Progress</h2>
      <p>
        {tasks.filter((t) => t.done).length}/{tasks.length} tasks completed
      </p>
    </div>
  );

  const Tasks = () => (
    <div>
      <h2>Tasks</h2>

      <input
        placeholder="Add task"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
      />

      <button onClick={addTask}>Add</button>

      {tasks.map((task, index) => (
        <div key={index}>
          {task.name}
          <button onClick={() => toggleTask(index)}>Done</button>
        </div>
      ))}
    </div>
  );

  const Habits = () => (
    <div>
      <h2>Habits</h2>
      {habits.map((habit, i) => (
        <div key={i}>
          {habit}
          <button onClick={() => toggleHabit(habit)}>
            {completedHabits.includes(habit) ? "Completed" : "Mark"}
          </button>
        </div>
      ))}
    </div>
  );

  const Focus = () => (
    <div>
      <h2>Focus Timer</h2>
      <h1>{focusTime}:00</h1>

      <button onClick={() => setFocusTime(focusTime + 5)}>+5</button>
      <button onClick={() => setFocusTime(25)}>Reset</button>
      <button onClick={() => setFocusTime(focusTime - 5)}>-5</button>
    </div>
  );

  const Analytics = () => (
    <div>
      <h2>Analytics</h2>
      <p>Tasks: {tasks.filter((t) => t.done).length}</p>
      <p>Habits: {completedHabits.length}</p>
      <p>Focus: {focusTime} min</p>
    </div>
  );

  const Profile = () => (
    <div>
      <h2>Profile</h2>
      <p>Name: User</p>
      <p>Level: Beginner</p>
      <p>Streak: 5 days</p>
    </div>
  );

  const render = () => {
    switch (tab) {
      case "tasks":
        return <Tasks />;
      case "habits":
        return <Habits />;
      case "focus":
        return <Focus />;
      case "analytics":
        return <Analytics />;
      case "profile":
        return <Profile />;
      default:
        return <Home />;
    }
  };

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h1>Ignite Productivity 🚀</h1>

      {render()}

      <hr />

      <div style={{ marginTop: 20 }}>
        <button onClick={() => setTab("home")}>Home</button>
        <button onClick={() => setTab("tasks")}>Tasks</button>
        <button onClick={() => setTab("habits")}>Habits</button>
        <button onClick={() => setTab("focus")}>Focus</button>
        <button onClick={() => setTab("analytics")}>Analytics</button>
        <button onClick={() => setTab("profile")}>Profile</button>
      </div>
    </div>
  );
    }
