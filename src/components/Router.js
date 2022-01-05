import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchResults from "../pages/SearchResults";
import FavouritesList from "../pages/FavouritesList";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<SearchResults />} />
      <Route exact path="/movies-app" element={<SearchResults />} />
      <Route exact path="/favourites" element={<FavouritesList />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
