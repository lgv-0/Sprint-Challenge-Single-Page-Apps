import React from "react";

export default function SearchForm(props)
{
  return (
    <section className="search-form">
      <form>
        Search <input type="text" onChange={(e)=>{props.sFind(e.target.value)}} value={props.find} />
      </form>
    </section>
  );
}
