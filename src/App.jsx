import React from 'react'
import Sidebar from './components/sidebar/Sidebar'
import Topbar from './components/topbar/Topbar'
import './app.css'
import Home from './pages/home/Home'
import UserList from './pages/userList/UserList'
import User from './pages/user/User'
import  ProductList from './pages/productList/ProductList'
import Product from './pages/product/Product'
import NewProduct from './pages/newProduct/NewProduct'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { NewUser } from './pages/newUser/NewUser'
import Analytics from './pages/analytics/Analytics'
import Sales from './pages/sales/Sales'
import Transactions from './pages/transactions/Transactions'
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
               <Route  path="/analytics">
                  <Analytics/>
               </Route>
               <Route  path="/sales">
                  <Sales/>
               </Route>
                   <Route path="/users">
               <UserList/>
               </Route>
               <Route path="/user/:userId">
               <User/>
               </Route>
               <Route path="/newUser">
               <NewUser/>
               </Route>
               <Route path="/products">
            <ProductList />
          </Route>
          <Route path="/product/:productId">
            <Product />
          </Route>
          <Route path="/newproduct">
            <NewProduct />
          </Route>
          <Route path="/Transactions">
            <Transactions />
          </Route>
             </Switch>
            
            
           </div>
        </Router>
    )
}

export default App
