import React from "react";
import styled from "styled-components";
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
    <PCard>
      <h3>[{props.info.id}] {props.info.name}</h3>
      <h4>{props.info.type}</h4>
      <h4>{props.info.species}</h4>
      <h4>{props.info.gender}</h4>
      <h4>{props.info.location['name']}</h4>
    </PCard>
  );
}

let PCard = styled.div`
  width: 49%;
`;