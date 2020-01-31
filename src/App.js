import React, { useEffect, useState } from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList.js";
import WelcomePage from "./components/WelcomePage.js";
import { BrowserRouter, Route, Link } from "react-router-dom";

export default function App()
{
  return (
    <main>
      <Header />
      <BrowserRouter>
        <Route exact path="/" component={()=>{return <WelcomePage />}} />
        <Route path="/characters" component={()=>{return <CharacterList />}} />
      </BrowserRouter>
    </main>
  );
}
