import React from "react";
import  ReactDom  from "react-dom";
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'
import  Login  from "./login";
import Demo from "./header";
import Dashboard from "./dashboard";
import Graph from "./demo";
import UserForm from "./listData";

import App from "./tables/apps.js";
import TableContent from "./tables/table";
import UserTable from "./tables/UserTable";
import TeacherList from "./tables/TeacherList";


ReactDom.render(
<Router>
  <Route exact path='/' component={Login}/> 
  <Route exact path='/Dashboard' component={Dashboard}/>  
  <Route exact path='/Admin' component={Demo}/> 
  <Route exact path='/Graph' component={Graph}/> 
  <Route exact path='/Form' component={UserForm}/> 
  <Route exact path='/App' component={App}/>
  <Route exact path='/table' component={TableContent}/>
  <Route exact path='/List' component={UserTable}/>
  <Route exact path='/teachers' component={TeacherList}/>

   
</Router>, document.getElementById("app"));