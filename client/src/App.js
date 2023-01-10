import './App.css';
import { BrowserRouter, Routes, Route, Link, Switch } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import Dashboard from './screens/Dashboard';
import Login from './screens/Login';
import urls from "./urls/urls";
import Header from './components/Header';
import SellItemFrom from './screens/SellItemForm';
import SelfPostedItems from './screens/SelfPostedItems';
import OrderedItem from './screens/OrderedItem';
import Signup from './screens/Signup';

const { useNavigate } = require("react-router-dom");
const axios = require("axios");


function App() {

 // const navigate = useNavigate();
 const [showHeader, setshowHeader] = useState(false)

  useEffect(() => {
    const checkLoggedIn = async () => {
      //setIsLoading(true);
      let token = localStorage.getItem("auth-token");

      if (!token) {
        console.log('No token')
        window.location.href = '/login'
        setshowHeader(false)
        return;
      }

      const tokenRes = await axios.post("/api/auth/isTokenValid", null, {
        headers: { Authorization: `${token}` },
      });

      if (tokenRes.data) {
        setshowHeader(true)
      }else{
        window.location.href = '/login'
        setshowHeader(false)
      }
    };

    if(window.location.pathname != '/login' && window.location.pathname != '/sign-up' ){
      checkLoggedIn();
    }
  }, []);
  return (
    <>
      <BrowserRouter>
      {showHeader ? <Header/> :<></> }
        <Routes>

          <Route path="/login" exact element={<Login/>} />
          <Route path="/sign-up" exact element={<Signup/>} />
          <Route path="/" exact element={<Dashboard/>} />
          <Route path="/sell-item" exact element={<SellItemFrom/>} />
          <Route path="/self-items" exact element={<SelfPostedItems/>} />
          <Route path="/ordered-items" exact element={<OrderedItem/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
