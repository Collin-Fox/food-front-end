import logo from './logo.svg';
import './App.css';
import api from './api/axiosConfig';
import {useState, useEffect} from "react";
import Layout from "./components/Layout";
import {Routes, Route} from 'react-router-dom'
import Home from './components/home/Home'
function App() {

  const [foods, setFoods] = useState();

  const getFoods = async  () => {

    try {
      const response = await api.get("/api/v1/food");
      console.log(response.data);
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
          <Route path="/" element={<Home foods={foods}/>}>

          </Route>
        </Route>
      </Routes>

    </div>
  );
}

export default App;
