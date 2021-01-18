import React from "react";
import styled, { css } from "styled-components";

export const CardWrapper = styled.div`
  overflow: hidden;
  padding: 0 0 32px;
  margin: 48px auto 0;
  width: 300px;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
`;

const Card = (props) => {
    const {character} = props;

    return (
        <CardWrapper>
            <div>{character.name}</div>
            <div>{character.species}</div>
        </CardWrapper>
    )
}

export default Card;
