import "./App.css";
import UserTable from "./Component/UserTable";
import Userform from "./Component/Userform";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Errors from "./Component/Errors";
import React from "react";
import Profile from "./Component/Profile";
// import "react-datepicker/dist/react-datepicker.css";
export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/userTable" element={<UserTable/>} />
            <Route  path="/userForm" element={<Userform/>} />
            <Route  path="/userProfile" element={<Profile/>} />
            {/* <Route exact path="/test/:id"  element={<Userform/>} /> */}
            <Route path="*" exact={true} element={<Errors/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

