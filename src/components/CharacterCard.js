import React from "react";
  /*
    Created
    Episode
    Gender
    Id
    Image
    Location
    Name
    Species
    Status
    Type
    Url
  */
export default function CharacterCard(props) {
  return (
    <div>
      <h3>[{props.info.id}] {props.info.name}</h3>
      <h4>{props.info.type}</h4>
      <h4>{props.info.species}</h4>
      <h4>{props.info.gender}</h4>
      <h4>{props.info.location['name']}</h4>
    </div>
  );
}
