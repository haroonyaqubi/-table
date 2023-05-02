import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Nans from "../recipes.json";
import styled from "styled-components";
import "../styles/Recettes.css";
const Recettes = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredNans = Nans.filter((nan) =>
    nan.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div>
      <Header />
      <SearchBox>
        <input
          type="text"
          placeholder="Recherchez vos recettes préférées"
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </SearchBox>
      <div className="card-container">
        {filteredNans.length > 0 ? (
          filteredNans.map((nan) => (
            <div className="card" key={nan.id}>
              <div className="card-content">
                <h2>{nan.name}</h2>
                <img
                  src={require(`../../public/images/${nan.name}.jpg`)}
                  className="img"
                />
                <p>{nan.description}</p>
                <p>{nan.time} minutes</p>
                <p>{nan.servings} servings</p>
                <p>{nan.appliance} appliance</p>
                <ul>
                  {nan.ingredients.map((ingredient) => (
                    <div key={ingredient.id}>
                      <p>{ingredient.ingredient}</p>
                      <p>{ingredient.quantity}</p>
                    </div>
                  ))}
                </ul>
                <p>{nan.ustensils.join(", ")}</p>
              </div>
            </div>
          ))
        ) : (
          <p>Recette non trouvée!</p>
        )}
      </div>

      <Footer />
    </div>
  );
};

const SearchBox = styled.form`
  display: flex;
  justify-content: right;
  margin-bottom: 1rem;

  input {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border-radius: 2rem;
    border: none;
    margin-right: 1rem;
  }
`;
export default Recettes;
