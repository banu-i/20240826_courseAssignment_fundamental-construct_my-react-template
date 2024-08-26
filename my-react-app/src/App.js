import React from "react";
import Navbar from "./components/navbar/Navbar";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Header */}
      <header>
        <h1>Welcome to My React App</h1>
      </header>

      {/* Navbar */}
      <Navbar />

      {/* Main Content Wrapper */}
      <div className="main-content" style={{ display: "flex" }}>
        {/* Sidebar */}
        <aside
          className="sidebar"
          style={{ width: "20%", padding: "10px", backgroundColor: "#f4f4f4" }}
        >
          <ul>
            <li>Link 1</li>
            <li>Link 2</li>
            <li>Link 3</li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className="content" style={{ width: "80%", padding: "10px" }}>
          <h2>Welcome to the Content Section</h2>
          <p>This is where the main content of the app will be displayed.</p>
        </main>
      </div>

      {/* Footer */}
      <footer
        style={{
          padding: "10px",
          textAlign: "center",
          backgroundColor: "#f4f4f4",
        }}
      >
        <p>© 2024 My React App. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
