import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import TodoTask from "./components/TodoTask";

function App() {
    return (
        <>
            <NavBar />
            <TodoTask
                taskName="Add functionality"
                taskDescription="Add description text box for modal"
            />
        </>
    );
}

export default App;
