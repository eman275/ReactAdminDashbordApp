import React from 'react'
import Sidebar from './components/sidebar/Sidebar'
import Topbar from './components/topbar/Topbar'
import './app.css'
import Home from './pages/home/Home'
import UserList from './pages/userList/UserList'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

const App = () => {
    return (
        <Router>
          <Topbar/>
           <div className="Container">
             <Sidebar/>
             <Switch>
               <Route exact path="/">
               <Home/>
               </Route>
                   <Route path="/users">
               <UserList/>
               </Route>
             </Switch>
            
            
           </div>
        </Router>
    )
}

export default App
