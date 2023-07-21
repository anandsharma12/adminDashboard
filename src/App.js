import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./styles/app.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import Leftside from "./Components/leftside/Leftside";
import MainDash from "./Components/MainDash/MainDash";
import Endside from "./Components/Endside/Endside";
const App = () => {
  return (
    <>
      <div className="App">
        <div className="AppGlass">
          <Sidebar />
          <Leftside />
          <MainDash />
          <Endside />
        </div>
      </div>
    </>
  );
};

export default App;
