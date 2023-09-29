import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'

const Pokemon = () => {
    const [pokemonList , setPokemonList] = useState([]);

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(response => {
                setPokemonList(response.data.results);
            })
            .catch(error => {
                console.error("Error fetching data", error);
    });
}, []);

    return (
        <>
        <div className="container">
            <h1 className="mb5">Pokemon</h1>
            <ul className="pokemon-grid">
                {pokemonList.map((pokemon, index) => (
                    <li key={index} className=" pokemon-item mb2">
                        {index + 1}: {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)} 
                    </li>
                ))}
            </ul>
        </div>
        </>
    );
}

export default Pokemon;