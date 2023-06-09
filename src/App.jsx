import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components";
import { Feed, SearchResult, VideoDetails } from "./pages";
import { AppContext } from "./context/contextApi";
import Check from "./pages/Check";

// Created by Syprogrammer Github:- https://github.com/syprogrammer

function App() {
  return (
    <AppContext>
      <BrowserRouter>
        <div className="flex flex-col h-full w-[100vw] overflow-hidden">
          <Header />
          <Routes>
            <Route path="/:category" exact  element={<Feed />} />
            <Route path="/" exact element={<Feed />} />
                <Route
                    path="/searchResult/:searchQuery"
                    element={<SearchResult />}
                />
                <Route path="/video/:category/:id" element={<VideoDetails />} /> 
            {/* <Route path="/" element={<Check/>}/> */}
             
          </Routes>
        </div>
      </BrowserRouter>
    </AppContext>
  );
}

export default App;
