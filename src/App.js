import logo from './logo.svg';
import './App.css';
import api from './components/api/axiosConfig';
import {useState, useEffect} from "react";
import Layout from "./components/Layout";
import {Routes, Route} from 'react-router-dom'
import Home from './components/home/Home'
import NavigationBar from "./components/nav-bar/NavigationBar";
import Menu from "./components/menu/Menu";
import Drinks from "./components/drinks/Drinks"
import Reservation from "./components/reservations/Reservation";
import Order from "./components/order/Order";
function App() {

  const [foods, setFoods] = useState();

  const getFoods = async  () => {

    try {
      const response = await api.get("/api/v1/food");

      setFoods(response.data);
    }
    catch (err){
      console.log(err);
    }

  }

  useEffect(() => {
    getFoods();
  }, []);

  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Home foods={foods}/>}/>
          <Route path="/Menu" element={<Menu foods={foods}/>}/>
          <Route path="/Drinks" element={<Drinks/>}/>
          <Route path="/Order" element={<Order foods={foods}/>}/>
          <Route path="/Reservations" element={<Reservation/>}/>

        </Route>
      </Routes>

    </div>
  );
}

export default App;
