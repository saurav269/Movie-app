
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";
import { fetchDataApi } from "./utilis/api";
import { useDispatch, useSelector } from "react-redux";
import { getApiConfig, getGenres } from "./store/homeSlice";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Details from "./pages/details/Details";
import SearchResult from "./pages/searchResult/SearchResult";
import Explore from "./pages/explore/Explore";
// import PagenotFound from "./pages/404/PagenotFound";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
// import Register from './pages/auth/Register';
// import ForgotPass from './pages/auth/ForgotPass';
// import Login from './pages/auth/Login';
// import PrivateRoute from './components/routes/PrivateRoute';



function App() {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home);
  // console.log(url)

  useEffect(() => {
    apiTestConfig();
    genresCall();
  }, []);

  const apiTestConfig = () => {
    fetchDataApi("/configuration?api_key=68ccd30529adc83eb696447bbbff1338")
      .then((res) => {
        console.log(res);

        //USING FOR BACKGROUND IMAGE WHICH WE GET FROM OUR API
        const url = {
          backdrop: res.images.secure_base_url + "original",
          poster: res.images.secure_base_url + "original",
          profile: res.images.secure_base_url + "original",
        };
        dispatch(getApiConfig(url));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //USING PROMISE ALL FOR HANDLING ALL API CALLS
  const genresCall = async () => {
    let promises = [];
    let endPoints = ["tv", "movie"];
    let allGenres = {};

    endPoints.forEach((url) => {
      promises.push(
        fetchDataApi(
          `/genre/${url}/list?api_key=68ccd30529adc83eb696447bbbff1338`
        )
      );
    });
    const data = await Promise.all(promises);
    //console.log(data)
    data.map(({ genres }) => {
      return genres.map((item) => (allGenres[item.id] = item));
    });
    dispatch(getGenres(allGenres))
  };

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Home /> }
        />
        {/* <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPass />} />
        <Route path="/login" element={<Login />} /> */}
        <Route path="/:mediaType/:id" element={<Details />} />
        <Route path="/search/:query" element={<SearchResult />} />
        <Route
          path="/explore/:mediaType"
          element={<Explore />}
        />
        {/* <Route path="*" element={<PagenotFound />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
