import { useState } from "react";
import "./App.css";
import Dog from "./Components/Dog";
import DogPage from "./Pages/DogPage";
import JokePage from "./Pages/JokePage";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import NavBar from "./Components/NavBar";
import MessageProvider from "./Contexts/MessageProvider";

//npm i react-router-dom

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <MessageProvider>
          <Routes>
            <Route path="/" element={<DogPage />} />
            <Route path="/jokes" element={<JokePage />} />
            <Route
              path="*"
              element={
                <>
                  <h1>Nothing here!</h1>
                  <NavLink to="/">Return Home</NavLink>
                </>
              }
            />
          </Routes>
        </MessageProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
