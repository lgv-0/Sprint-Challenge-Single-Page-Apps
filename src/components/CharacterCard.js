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
export default function CharacterCard(props)
{
  return (
    <PCard>
      <img src={props.info.image} />
      <h3>[{props.info.id}] {props.info.name}</h3>
      <h4>{props.info.type}</h4>
      <h4>{props.info.species}</h4>
      <h4>{props.info.gender}</h4>
      <h4>{props.info.location['name']}</h4>
    </PCard>
  );
}

let PCard = styled.div`
  animation: fadein 1s forwards;

  text-align: center;
  width: 49%;
  border: 1px solid black;

  h3
  {
    text-decoration: underline;
  }
  img
  {
    margin-top: 3px;
  }

  @keyframes fadein
  {
    0% {opacity: 0%; }
    100% {opacity: 100%; }
  }
`;