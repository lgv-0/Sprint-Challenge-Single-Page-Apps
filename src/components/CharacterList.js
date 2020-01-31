import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

let outArray = [];

export default function CharacterList()
{
  let [people, sPeople] = useState([]);

  function fPush(inc)
  {
    let copy = [];
    outArray.forEach((i)=>{copy.push(i)});
    copy.push(inc);
    outArray = copy;
    if (outArray.length == 7)
      sPeople(outArray);
  }

  useEffect(()=>{
    for (let i = 1; i < 8; i++)
      axios.get("https://rickandmortyapi.com/api/character/" + i).then((response)=>
        {
          fPush(response.data);
        }).catch((error)=>{console.log(error)})
  }, []);

  return (
    <section className="character-list">
      {people.map((i)=>
        {
          return <CharacterCard key={i.id} info={i} />;
        })}
    </section>
  );
}