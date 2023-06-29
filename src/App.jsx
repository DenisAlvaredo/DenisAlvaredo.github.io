import React, { useEffect, useState } from "react"
import NavBar from "./components/header"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import IndexCharacters from "./components/screens/indexchar";
import IndexEpisodes from "./components/screens/indexep";
import CharacterData from "./components/characters/Data";
import EpisodeData from "./components/episodes/Data";
import IndexLocations from "./components/screens/indexloc";
import LocationData from "./components/locations/Data";

function App() {

  return (
    <>
      <NavBar brand="Rick and Morty App" />
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<IndexCharacters/>}></Route>
          <Route path="/characters/:name" element={<CharacterData />} ></Route>
          <Route path="/episodes" element={<IndexEpisodes/>}></Route>
          <Route path="/episodes/:name" element={<EpisodeData />} ></Route>
          <Route path="/locations" element={<IndexLocations />} ></Route>
          <Route path="/locations/:name" element={<LocationData />} ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
