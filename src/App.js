import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";
import users from "./data";

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <Outlet context={users} />
    </>
  );
};

export default App;
