import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from './layouts/Layout';
import NotFound from "./pages/NotFound"
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Cities from './pages/Cities';
import Hotels from './pages/Hotels';
import NewCity from './pages/NewCity';
import NewHotel from './pages/NewHotel';
import CitiesDetails from './pages/CitiesDetails';
import HotelDetails from './pages/HotelDetails';
import MyCities from './pages/MyCities';
import MyHotels from './pages/MyHotels';
import MyTineraries from './pages/MyTineraries';
import MyShows from './pages/MyShows';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/cities" element={<Cities />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/cities/:id" element={<CitiesDetails />} />
        <Route path="/hotels/:id" element={<HotelDetails />} />
        <Route path="/newcity" element={<NewCity />} />
        <Route path="/newhotel" element={<NewHotel />} />
        <Route path="/mycities" element={<MyCities/>} />
        <Route path="/myhotels" element={<MyHotels/>} />
        <Route path="/mytineraries" element={<MyTineraries/>} />
        <Route path="/myshows" element={<MyShows/>} />
      </Routes>
    </Layout>
  );
}

export default App;