import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login/Login";
import { UserStorage } from "./userContext";
import User from "./components/User/User";
import Photo from "./components/Photo/Photo";
import ProtectedRouter from "./components/ProtectedRouter";
import UserProfile from "./components/User/UserProfile";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>
          <Header />
          <main className="AppBody">
            <Routes>
              <Route path="/test_Novo" element={<Home />} />
              <Route path="/login/*" element={<Login />} />
              <Route path="/foto/:id" element={<Photo />} />
              <Route path="/perfil/:user" element={<UserProfile />} />
              <Route path="*" element={<NotFound />} />
              <Route
                path="/conta/*"
                element={
                  <ProtectedRouter>
                    <User />
                  </ProtectedRouter>
                }
              />
            </Routes>
          </main>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
};

export default App;
