import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";

let outArray = [];

export default function CharacterList()
{
  let [people, sPeople] = useState([]);
  let [find, sFind] = useState("");

  function fPush(inc)
  {
    let copy = [];
    outArray.forEach((i)=>{copy.push(i)});
    copy.push(inc);
    outArray = copy;
    sPeople(outArray);
  }

  useEffect(()=>{
    for (let i = 1; i < 9; i++)
      axios.get("https://rickandmortyapi.com/api/character/" + i).then((response)=>
        {
          fPush(response.data);
        }).catch((error)=>{console.log(error)})
  }, []);

  return (
    <div>
      <SearchForm find={find} sFind={sFind} />
      <section className="character-list">
        {people.map((i)=>
          {
            return i.name.toLowerCase().indexOf(find.toLowerCase()) != -1 ? <CharacterCard key={i.id} info={i} /> : null;
          })}
      </section>
    </div>
  );
}