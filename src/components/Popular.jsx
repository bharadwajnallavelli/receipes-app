import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
// create a popular to render 9 random receipes
function Popular() {
  // useEffect to call the functions onComponentUpdate
  useEffect(() => {
    getPopular();
  }, []);
  // initializing the states
  const [Popular, setPopular] = useState([]);
  // creating the arrow function to fetch the receipes from API
  const getPopular = async () => {
    try {
      const resp = await axios.get(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
      );
      setPopular(resp.data.recipes);
    } catch (error) {
      console.log(error);
    }
  };
  // retrun the jsx
  return (
    <Wrapper>
      <h3>Popular Picks</h3>
      {Popular.map((receipe) => {
        return (
          <Card key={receipe.id}>
            <p>{receipe.title}</p>
            <img src={receipe.image} alt="receipe.title" />
          </Card>
        );
      })}
    </Wrapper>
  );
}
// Creating styled components
const Wrapper = styled.div`
  margin: 4rem 0rem;
`;
const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
`;

export default Popular;
