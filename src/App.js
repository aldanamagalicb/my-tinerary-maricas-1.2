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
import Profile from './pages/Profile';
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import userActions from './redux/actions/userActions';
import ProtectedRoute from './components/ProtectedRoute';

function App() {

  let { logged, role } = useSelector(store => store.userReducer)
  console.log(role)
  let dispatch = useDispatch()
  let { reEnter } = userActions

  useEffect(() => {
    let token = JSON.parse(localStorage.getItem('token'))
    if (token) {
      dispatch(reEnter(token.token.user))
    }
    // eslint-disable-next-line
  }, [])


  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/signup" element={logged ? <Home /> : <SignUp />} />
        <Route path="/signin" element={logged ? <Home /> : <SignIn />} />
        <Route path="/cities" element={<Cities />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/cities/:id" element={<CitiesDetails />} />
        <Route path="/hotels/:id" element={<HotelDetails />} />

        <Route element={<ProtectedRoute isAllowed={role === "admin" || role === "user"} redirect="/signin" />}>
          <Route path="/myprofile" element={<Profile />} />
        </Route>

        <Route element={<ProtectedRoute isAllowed={role === "admin"} reDirect="/" />}>
          <Route path="/newcity" element={<NewCity />} />
          <Route path="/newhotel" element={<NewHotel />} />
          <Route path="/mycities" element={<MyCities />} />
          <Route path="/myhotels" element={<MyHotels />} />
        </Route>

        <Route element={<ProtectedRoute isAllowed={role === "user"} />}>
          <Route path="/mytineraries" element={<MyTineraries />} />
          <Route path="/myshows" element={<MyShows />} />
        </Route>
      </Routes>
    </Layout>
  );
}

export default App;