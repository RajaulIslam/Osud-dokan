import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Shared/Header/Header";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import About from "./Pages/About/About";
import Footer from "./Shared/Footer/Footer";
import AuthProvider from "./Context/AuthProvider";
import Service from "./Pages/Home/Service/Service";
import Services from "./Pages/Home/Services/Services";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import FreeService from "./Pages/FreeService/FreeService";
import Panding from "./Pages/Panding/Panding";
import Cart from "./Pages/Cart/Cart";

function App() {
  return (
    <div className="app">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/home" element={<Home></Home>}></Route>
            <Route path="/about" element={<About></About>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route
              path="/freeService"
              element={<FreeService></FreeService>}
            ></Route>

            <Route path="/signup" element={<SignUp></SignUp>}></Route>
            <Route path="/service" element={<Services></Services>}></Route>

            <Route
              path="/service/:serviceId"
              element={
                <PrivateRoute>
                  <Service />
                </PrivateRoute>
              }
            />

            <Route
              path="/pending"
              element={
                <PrivateRoute>
                  <Panding />
                </PrivateRoute>
              }
            />

            <Route
              path="/cart"
              element={
                <PrivateRoute>
                  <Cart />
                </PrivateRoute>
              }
            />

            <Route path="*" element={<NotFound></NotFound>}></Route>
          </Routes>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
