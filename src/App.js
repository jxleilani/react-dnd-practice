import { TouchBackend } from "react-dnd-touch-backend";
import { DndProvider } from "react-dnd";
import logo from "./logo.svg";
import "./App.css";
import DragNDrop from "./components/DragNDrop";

const data = [
  { title: "Monday", items: ["1", "2", "3"] },
  { title: "Tuesday", items: ["4", "5"] },
];

function App() {
  return (
    <DndProvider backend={TouchBackend} options={opts}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <DragNDrop data={data} />

        {/* <div className="drag-n-drop">
        <div className="dnd-day">
          <div className="dnd-day-title">Monday</div>
          <div className="dnd-item">
            <p>Item 1</p>
          </div>
        </div>
      </div> */}
      </div>
    </DndProvider>
  );
}

export default App;
