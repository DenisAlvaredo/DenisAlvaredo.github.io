import NavBar from "./components/header"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import IndexCharacters from "./components/screens/indexchar";
import IndexEpisodes from "./components/screens/indexep";
import CharacterData from "./components/characters/Data";
import EpisodeData from "./components/episodes/Data";
import IndexLocations from "./components/screens/indexloc";
import LocationData from "./components/locations/Data";
import React from "react";

function App() {

  return (
    <>
      <NavBar brand="Rick and Morty App" />
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<IndexCharacters />}></Route>
          <Route path="/characters/:id" element={<CharacterData />} ></Route>
          <Route path="/episodes" element={<IndexEpisodes/>}></Route>
          <Route path="/episodes/:id" element={<EpisodeData />} ></Route>
          <Route path="/locations" element={<IndexLocations />} ></Route>
          <Route path="/locations/:id" element={<LocationData />} ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
